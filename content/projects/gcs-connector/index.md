---
title: GCS Connector
slug: gcs-connector
shortDescription: "High-throughput Go microservice for migrating and consolidating third-party data from Azure Data Lake into Google Cloud Storage for analytics."
tech: ["Go", "Azure", "Kubernetes", "Google Cloud Storage"]
topics: ["Backend Development", "Data Engineering", "Cloud Migration", "Microservices"] 
screenshots: []

problem: "Third-party operational data was being delivered into Azure Data Lake in inconsistent formats and needed to be reliably migrated into Google Cloud to support downstream analytics and reporting. 
Existing processes were manual, fragile, and did not scale as data volume and source diversity increased."

solution: "Designed and built a business-critical Go microservice responsible for high-throughput data migration from Azure Blob Storage into Google Cloud Storage. 
The service normalised disparate third-party data feeds, enforced schema and delivery guarantees, and provided a reliable ingestion layer for the analytics platform. 
The architecture was deliberately extensible, allowing additional third-party data sources to be onboarded with minimal change while maintaining performance and operational simplicity."

impact: "Enabled a scalable and reliable data pipeline feeding Google BigQuery and downstream analytics workloads. Reduced operational risk by replacing ad-hoc data transfers with a monitored, testable service. 
The connector became a core part of the organisation’s data ingestion strategy and was extended to support multiple third-party providers beyond the initial use case."

takeaways: "Hands-on experience architecting and delivering production data pipelines in Go, from dependency selection and cloud service integration to performance tuning and operational concerns. 
Reinforced a delivery-focused approach to backend engineering, balancing maintainability, scalability, and real-world business requirements."
---

High-level Breakdown:

This project focused on building a robust ingestion layer rather than a one-off migration. 
Emphasis was placed on correctness, throughput, and extensibility to support long-term analytics needs as data volume and source complexity grew.
