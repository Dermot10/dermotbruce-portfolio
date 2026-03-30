import retrieveContent, { pathToSlug } from "./funcs";

// Mock global fetch
global.fetch = jest.fn();

describe("pathToSlug", () => {
  it("removes 'projects/' prefix and '/index.md' suffix", () => {
    expect(pathToSlug("projects/hello-world/index.md")).toBe("hello-world");
  });

  it("handles paths without index.md", () => {
    expect(pathToSlug("projects/test")).toBe("test");
  });

  it("returns unchanged string if no matches", () => {
    expect(pathToSlug("random/path.md")).toBe("random/path.md");
  });
});

describe("retrieveContent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches files and returns markdown content", async () => {
    (fetch as jest.Mock)
      // First call: directory listing
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          {
            type: "file",
            name: "test.md",
            download_url: "https://file-url",
          },
        ],
      })
      // Second call: markdown file
      .mockResolvedValueOnce({
        text: async () => "# Hello world",
      });

    const result = await retrieveContent({ content: "projects" });

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: "test.md",
      content: "# Hello world",
    });
  });

  it("handles nested directories (recursion)", async () => {
    (fetch as jest.Mock)
      // Root directory
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          { type: "dir", name: "nested" },
        ],
      })
      // Nested directory
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          {
            type: "file",
            name: "nested.md",
            download_url: "https://nested-file",
          },
        ],
      })
      // File content
      .mockResolvedValueOnce({
        text: async () => "Nested content",
      });

    const result = await retrieveContent({ content: "projects" });

    expect(result).toHaveLength(1);
    expect(result[0].content).toBe("Nested content");
  });

  it("throws an error if the API response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(
      retrieveContent({ content: "projects" })
    ).rejects.toThrow("Request failed: 500");
  });
});