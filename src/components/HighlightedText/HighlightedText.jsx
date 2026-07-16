const keywords = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "REST APIs",
  "RESTful APIs",
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "object-oriented programming",
  "root cause analysis",
  "debugging",
  "backend services",
  "application workflows",
  "system configuration",
  "OOP principles",
];

function HighlightedText({ text }) {
  const pattern = new RegExp(`(${keywords.join("|")})`, "g");

  const parts = text.split(pattern);

  return parts.map((part, index) =>
    keywords.includes(part) ? (
      <span
        key={`${part}-${index}`}
        className="font-medium text-white"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default HighlightedText;