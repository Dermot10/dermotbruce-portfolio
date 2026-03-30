import fs from "fs";
import retrieveContent, { pathToSlug } from "./funcs";

jest.mock("fs");

const mockedFs = fs as any; // bypass TS strict Dirent typing in tests, function only uses strings 

describe("retrieveContent", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("fetches files and returns markdown content", () => {
    mockedFs.readdirSync.mockReturnValueOnce(["test.md"]);
    mockedFs.statSync.mockReturnValueOnce({
      isDirectory: () => false,
    });
    mockedFs.readFileSync.mockReturnValueOnce("# Hello world");

    const result = retrieveContent({ content: "projects" });

    expect(result).toHaveLength(1);
    expect(result[0].content).toBe("# Hello world");
  });

  it("handles nested directories (recursion)", () => {
    // Root directory
    mockedFs.readdirSync.mockReturnValueOnce(["nested"]);
    mockedFs.statSync.mockReturnValueOnce({ isDirectory: () => true });

    // Nested directory
    mockedFs.readdirSync.mockReturnValueOnce(["nested.md"]);
    mockedFs.statSync.mockReturnValueOnce({ isDirectory: () => false });
    mockedFs.readFileSync.mockReturnValueOnce("Nested content");

    const result = retrieveContent({ content: "projects" });

    expect(result).toHaveLength(1);
    expect(result[0].content).toBe("Nested content");
  });

  it("throws an error if directory does not exist", () => {
    mockedFs.readdirSync.mockImplementationOnce(() => {
      throw new Error("ENOENT: no such file or directory");
    });

    expect(() => retrieveContent({ content: "projects" })).toThrow(
      /ENOENT/
    );
  });
});