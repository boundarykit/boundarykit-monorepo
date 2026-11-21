export default {
  "Documentation": [
    "index",
    "quickstart",
    "architecture",
    "glossary",
    "changelog",
    "documentation/core-concepts",
    "documentation/authenticate-requests",
    "documentation/design-boundaries",
    "documentation/compose-policies",
    "documentation/isolate-sandboxes",
    "documentation/rate-limits",
    "documentation/migrate-from-v1-to-v2",
    "documentation/security-model",
    "documentation/session-lifecycle",
    "documentation/token-scopes",
    "test/policy-fixtures",
    "test/golden-decisions",
    "test/replay-sessions",
    "test/negative-cases",
    "test/nested-rule-tests",
    "test/sandbox-isolation-tests",
    "test/token-expiry-tests",
    "test/tenant-separation-tests",
    "test/baseline-comparisons",
    "test/latency-budgets",
    "test/evaluation-reports",
    "test/release-acceptance",
    "cookbook/limit-tool-access",
    "cookbook/scope-a-support-bot",
    "cookbook/isolate-a-preview-agent",
    "cookbook/rotate-an-api-key",
    "cookbook/export-audit-evidence",
    "cookbook/replay-a-denied-call",
    "cookbook/detect-a-noisy-agent",
    "cookbook/review-policy-drift",
    "cookbook/expire-a-session",
    "cookbook/route-an-alert",
    "cookbook/test-nested-rules",
    "cookbook/trace-a-webhook",
    "cookbook/inspect-usage-spikes",
    "cookbook/stage-a-policy-rollout",
    "integrations/openai",
    "integrations/anthropic",
    "integrations/langchain",
    "integrations/crewai",
    "integrations/cloudflare-workers",
    "integrations/aws-lambda",
    "integrations/datadog",
    "integrations/pagerduty",
    "integrations/slack",
    "integrations/okta",
    "integrations/github-actions",
    "integrations/terraform",
    "administration/workspace-provisioning",
    "administration/rbac",
    "administration/sso-and-saml",
    "administration/audit-exports",
    "administration/workspace-isolation",
    "administration/retention",
    "administration/billing",
    "administration/service-accounts",
    "administration/membership-reviews",
    "administration/organization-settings",
    "monitor/live-telemetry",
    "monitor/anomaly-alerts",
    "monitor/decision-slos",
    "monitor/request-traces",
    "monitor/delivery-latency",
    "monitor/error-budgets",
    "monitor/triage-dashboards",
    "monitor/usage-reports",
    "documentation/troubleshooting",
    "administration/security-compliance",
    "cookbook/BoundaryQL-Reference",
    "documentation/policy-expression-reference",
    "documentation/audit-event-catalog"
  ],
  "MCP": [
    "mcp/server-overview",
    "mcp/tool-catalog",
    "mcp/authentication",
    "mcp/local-stdio",
    "mcp/hosted-sse",
    "mcp/claude-setup",
    "mcp/cursor-setup",
    "mcp/codex-setup",
    "mcp/resource-discovery",
    "mcp/tool-permissions",
    "mcp"
  ],
  "BaC": [
    "bac/yaml-schema",
    "bac/cli-installation",
    "bac/initialize-a-workspace",
    "bac/validate-a-manifest",
    "bac/plan-changes",
    "bac/apply-revisions",
    "bac/detect-drift",
    "bac/gitops-workflows",
    "bac/promote-configuration",
    "bac/recover-a-revision",
    "bac"
  ],
  "CI/CD": [
    "cicd/github-actions",
    "cicd/gitlab-ci",
    "cicd/pr-policy-gates",
    "cicd/preview-environments",
    "cicd/rollback",
    "cicd/protected-branches",
    "cicd/artifact-promotion",
    "cicd/secret-injection",
    "cicd/failure-diagnostics",
    "cicd/release-evidence"
  ],
  "API": [
    "api-reference",
    {
      "type": "category",
      "label": "Status",
      "items": [
        "api/Status/get_v1_status_summary"
      ]
    },
    {
      "type": "category",
      "label": "Agents",
      "items": [
        "api/agents/delete_v1_agents_id",
        "api/agents/delete_v2_agents_id",
        "api/agents/get_v1_agents",
        "api/agents/get_v1_agents_id",
        "api/agents/get_v1_agents_id_history",
        "api/agents/get_v2_agents"
      ]
    },
    {
      "type": "category",
      "label": "Alerts",
      "items": [
        "api/alerts/delete_v1_alerts_id",
        "api/alerts/delete_v2_alerts_id",
        "api/alerts/get_v1_alerts",
        "api/alerts/get_v1_alerts_id",
        "api/alerts/get_v1_alerts_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Audits",
      "items": [
        "api/audits/delete_v1_audits_id",
        "api/audits/delete_v2_audits_id",
        "api/audits/get_v1_audits",
        "api/audits/get_v1_audits_id",
        "api/audits/get_v1_audits_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Boundaries",
      "items": [
        "api/boundaries/delete_v1_boundaries_id",
        "api/boundaries/delete_v2_boundaries_id",
        "api/boundaries/get_v1_boundaries",
        "api/boundaries/get_v1_boundaries_id",
        "api/boundaries/get_v1_boundaries_id_history",
        "api/boundaries/get_v2_boundaries"
      ]
    },
    {
      "type": "category",
      "label": "Evaluations",
      "items": [
        "api/evaluations/delete_v1_evaluations_id",
        "api/evaluations/delete_v2_evaluations_id",
        "api/evaluations/get_v1_evaluations",
        "api/evaluations/get_v1_evaluations_id",
        "api/evaluations/get_v1_evaluations_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Integrations",
      "items": [
        "api/integrations/delete_v1_integrations_id",
        "api/integrations/delete_v2_integrations_id",
        "api/integrations/get_v1_integrations",
        "api/integrations/get_v1_integrations_id",
        "api/integrations/get_v1_integrations_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Monitors",
      "items": [
        "api/monitors/delete_v1_monitors_id",
        "api/monitors/delete_v2_monitors_id",
        "api/monitors/get_v1_monitors",
        "api/monitors/get_v1_monitors_id",
        "api/monitors/get_v1_monitors_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Organizations",
      "items": [
        "api/organizations/delete_v1_organizations_id",
        "api/organizations/delete_v2_organizations_id",
        "api/organizations/get_v1_organizations",
        "api/organizations/get_v1_organizations_id",
        "api/organizations/get_v1_organizations_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Policies",
      "items": [
        "api/policies/delete_v1_policies_id",
        "api/policies/delete_v2_policies_id",
        "api/policies/get_v1_policies",
        "api/policies/get_v1_policies_id",
        "api/policies/get_v1_policies_id_history",
        "api/policies/get_v2_policies"
      ]
    },
    {
      "type": "category",
      "label": "Sandboxes",
      "items": [
        "api/sandboxes/delete_v1_sandboxes_id",
        "api/sandboxes/delete_v2_sandboxes_id",
        "api/sandboxes/get_v1_sandboxes",
        "api/sandboxes/get_v1_sandboxes_id",
        "api/sandboxes/get_v1_sandboxes_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Sessions",
      "items": [
        "api/sessions/delete_v1_sessions_id",
        "api/sessions/delete_v2_sessions_id",
        "api/sessions/get_v1_sessions",
        "api/sessions/get_v1_sessions_id",
        "api/sessions/get_v1_sessions_id_history",
        "api/sessions/get_v2_sessions"
      ]
    },
    {
      "type": "category",
      "label": "Tokens",
      "items": [
        "api/tokens/delete_v1_tokens_id",
        "api/tokens/delete_v2_tokens_id",
        "api/tokens/get_v1_tokens",
        "api/tokens/get_v1_tokens_id",
        "api/tokens/get_v1_tokens_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Usage",
      "items": [
        "api/usage/delete_v1_usage_id",
        "api/usage/delete_v2_usage_id",
        "api/usage/get_v1_usage",
        "api/usage/get_v1_usage_id",
        "api/usage/get_v1_usage_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Webhooks",
      "items": [
        "api/webhooks/delete_v1_webhooks_id",
        "api/webhooks/delete_v2_webhooks_id",
        "api/webhooks/get_v1_webhooks",
        "api/webhooks/get_v1_webhooks_id",
        "api/webhooks/get_v1_webhooks_id_history"
      ]
    },
    "events/alert-opened",
    "events/boundary-changed",
    "events/configuration-changed",
    "events/evaluation-completed",
    "events/session-closed",
    "events/token-revoked"
  ]
}
