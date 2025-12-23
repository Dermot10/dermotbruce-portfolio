import Link from "next/link";

export default function ContactPage(){
    return(
        <section className="py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Contact</h1>
                <p>
                    Email:   dermotbruce@outlook.com <br />
                    LinkedIn:   {" "}
                    <a
                        href="https://www.linkedin.com/in/dermot-bruce-agbeko-242869221/"
                        className="text-[#3B82F6] hover:underline transition"
                    >
                        https://www.linkedin.com/in/dermot-bruce-agbeko-242869221/
                    </a>
                    </p> 
        </section>
  );
}