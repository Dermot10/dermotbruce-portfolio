---
title: Detection as Code
slug: detection-as-code
shortDescription: "Detection-as-Code platform for managing SIEM detections as versioned software"
tech: ["Python", "GitHub", "CI/CD", "YAML", "Splunk"]
topics: ["Platform Engineering", "Software Engineering", "Security Automation"]
screenshots: []

problem: "Security detections were authored and maintained directly within the SIEM, resulting in tightly coupled, stateful configuration that was difficult to review, test, or scale. 
Detection logic lacked version control, clear ownership, and consistent deployment workflows, increasing the risk of regressions and limiting collaborative development. 
With duplication and overlapping alerts a particular issue."

solution: "Architected and implemented a Detection-as-Code framework for the security team, treating detections as structured software artifacts rather than SIEM-native configuration. 
Designed a standardised YAML schema for detections and built automation to extract requirements from Jira issues, package them into version-controlled repositories, and deploy them through CI pipelines. 
The platform enforced consistency, enabled peer review, and decoupled detection authoring from the SIEM UI, allowing detection engineering to scale using established software development practices."

impact: "Introduced version control, code review, and repeatable deployment to detection engineering workflows. 
Reduced operational risk by making detection changes auditable, reproducible, and easier to reason about. 
Established a foundation for scaling detection development across teams while maintaining consistency and governance."

takeaways: "Strengthened experience designing internal platforms that abstract complexity and improve developer workflows. 
Reinforced a senior engineering approach to security tooling: focusing on interfaces, schemas, and lifecycle management rather than one-off automation."
---

High-level breakdown:

Detection requirements authored and tracked as Jira issues rather than ad-hoc SIEM configuration.

Automation extracts structured detection data from Jira tickets.

Detection definitions transformed into standardised YAML schemas.

YAML artifacts committed to GitHub for version control, review, and traceability.

CI pipelines validate schema correctness and deployment readiness.

Approved detections deployed into Splunk via automated workflows.

Platform decouples detection lifecycle management from the SIEM UI, enabling scalable collaboration.
