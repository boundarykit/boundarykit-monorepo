export default {
  "guides": [
    {
      "type": "category",
      "label": "Overview",
      "items": [
        "index",
        "quickstart",
        "architecture",
        "glossary",
        "changelog"
      ]
    },
    {
      "type": "category",
      "label": "documentation",
      "items": [
        "documentation/core-concepts",
        "documentation/authenticate-requests",
        "documentation/design-boundaries",
        "documentation/compose-policies",
        "documentation/isolate-sandboxes",
        "documentation/rate-limits",
        "documentation/migrate-from-v1-to-v2",
        "documentation/security-model",
        "documentation/session-lifecycle",
        "documentation/token-scopes"
      ]
    },
    {
      "type": "category",
      "label": "test",
      "items": [
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
        "test/release-acceptance"
      ]
    },
    {
      "type": "category",
      "label": "cookbook",
      "items": [
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
        "cookbook/stage-a-policy-rollout"
      ]
    },
    {
      "type": "category",
      "label": "integrations",
      "items": [
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
        "integrations/terraform"
      ]
    },
    {
      "type": "category",
      "label": "mcp",
      "items": [
        "mcp/server-overview",
        "mcp/tool-catalog",
        "mcp/authentication",
        "mcp/local-stdio",
        "mcp/hosted-sse",
        "mcp/claude-setup",
        "mcp/cursor-setup",
        "mcp/codex-setup",
        "mcp/resource-discovery",
        "mcp/tool-permissions"
      ]
    },
    {
      "type": "category",
      "label": "bac",
      "items": [
        "bac/yaml-schema",
        "bac/cli-installation",
        "bac/initialize-a-workspace",
        "bac/validate-a-manifest",
        "bac/plan-changes",
        "bac/apply-revisions",
        "bac/detect-drift",
        "bac/gitops-workflows",
        "bac/promote-configuration",
        "bac/recover-a-revision"
      ]
    },
    {
      "type": "category",
      "label": "cicd",
      "items": [
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
      ]
    },
    {
      "type": "category",
      "label": "administration",
      "items": [
        "administration/workspace-provisioning",
        "administration/rbac",
        "administration/sso-and-saml",
        "administration/audit-exports",
        "administration/workspace-isolation",
        "administration/retention",
        "administration/billing",
        "administration/service-accounts",
        "administration/membership-reviews",
        "administration/organization-settings"
      ]
    },
    {
      "type": "category",
      "label": "monitor",
      "items": [
        "monitor/live-telemetry",
        "monitor/anomaly-alerts",
        "monitor/decision-slos",
        "monitor/request-traces",
        "monitor/delivery-latency",
        "monitor/error-budgets",
        "monitor/triage-dashboards",
        "monitor/usage-reports"
      ]
    },
    {
      "type": "category",
      "label": "Boundaries API",
      "items": [
        "api/boundaries/get_v2_boundaries",
        "api/boundaries/post_v2_boundaries",
        "api/boundaries/get_v2_boundaries_id",
        "api/boundaries/patch_v2_boundaries_id",
        "api/boundaries/delete_v2_boundaries_id",
        "api/boundaries/get_v2_boundaries_search",
        "api/boundaries/get_v2_boundaries_id_history"
      ]
    },
    {
      "type": "category",
      "label": "Policies API",
      "items": [
        "api/policies/get_v2_policies",
        "api/policies/post_v2_policies",
        "api/policies/get_v2_policies_id",
        "api/policies/patch_v2_policies_id",
        "api/policies/delete_v2_policies_id",
        "api/policies/get_v2_policies_search"
      ]
    },
    {
      "type": "category",
      "label": "Agents API",
      "items": [
        "api/agents/get_v2_agents",
        "api/agents/post_v2_agents",
        "api/agents/get_v2_agents_id",
        "api/agents/patch_v2_agents_id",
        "api/agents/delete_v2_agents_id",
        "api/agents/get_v2_agents_search"
      ]
    },
    {
      "type": "category",
      "label": "Sandboxes API",
      "items": [
        "api/sandboxes/get_v2_sandboxes",
        "api/sandboxes/post_v2_sandboxes",
        "api/sandboxes/get_v2_sandboxes_id",
        "api/sandboxes/patch_v2_sandboxes_id",
        "api/sandboxes/delete_v2_sandboxes_id",
        "api/sandboxes/get_v2_sandboxes_search"
      ]
    },
    {
      "type": "category",
      "label": "Tokens API",
      "items": [
        "api/tokens/get_v2_tokens",
        "api/tokens/post_v2_tokens",
        "api/tokens/get_v2_tokens_id",
        "api/tokens/patch_v2_tokens_id",
        "api/tokens/delete_v2_tokens_id",
        "api/tokens/get_v2_tokens_search"
      ]
    },
    {
      "type": "category",
      "label": "Sessions API",
      "items": [
        "api/sessions/get_v2_sessions",
        "api/sessions/post_v2_sessions",
        "api/sessions/get_v2_sessions_id",
        "api/sessions/patch_v2_sessions_id",
        "api/sessions/delete_v2_sessions_id",
        "api/sessions/get_v2_sessions_search"
      ]
    },
    {
      "type": "category",
      "label": "Evaluations API",
      "items": [
        "api/evaluations/get_v2_evaluations",
        "api/evaluations/post_v2_evaluations",
        "api/evaluations/get_v2_evaluations_id",
        "api/evaluations/patch_v2_evaluations_id",
        "api/evaluations/delete_v2_evaluations_id",
        "api/evaluations/get_v2_evaluations_search"
      ]
    },
    {
      "type": "category",
      "label": "Audits API",
      "items": [
        "api/audits/get_v2_audits",
        "api/audits/post_v2_audits",
        "api/audits/get_v2_audits_id",
        "api/audits/patch_v2_audits_id",
        "api/audits/delete_v2_audits_id",
        "api/audits/get_v2_audits_search"
      ]
    },
    {
      "type": "category",
      "label": "Alerts API",
      "items": [
        "api/alerts/get_v2_alerts",
        "api/alerts/post_v2_alerts",
        "api/alerts/get_v2_alerts_id",
        "api/alerts/patch_v2_alerts_id",
        "api/alerts/delete_v2_alerts_id",
        "api/alerts/get_v2_alerts_search"
      ]
    },
    {
      "type": "category",
      "label": "Monitors API",
      "items": [
        "api/monitors/get_v2_monitors",
        "api/monitors/post_v2_monitors",
        "api/monitors/get_v2_monitors_id",
        "api/monitors/patch_v2_monitors_id",
        "api/monitors/delete_v2_monitors_id",
        "api/monitors/get_v2_monitors_search"
      ]
    },
    {
      "type": "category",
      "label": "Webhooks API",
      "items": [
        "api/webhooks/get_v2_webhooks",
        "api/webhooks/post_v2_webhooks",
        "api/webhooks/get_v2_webhooks_id",
        "api/webhooks/patch_v2_webhooks_id",
        "api/webhooks/delete_v2_webhooks_id",
        "api/webhooks/get_v2_webhooks_search"
      ]
    },
    {
      "type": "category",
      "label": "Integrations API",
      "items": [
        "api/integrations/get_v2_integrations",
        "api/integrations/post_v2_integrations",
        "api/integrations/get_v2_integrations_id",
        "api/integrations/patch_v2_integrations_id",
        "api/integrations/delete_v2_integrations_id",
        "api/integrations/get_v2_integrations_search"
      ]
    },
    {
      "type": "category",
      "label": "Organizations API",
      "items": [
        "api/organizations/get_v2_organizations",
        "api/organizations/post_v2_organizations",
        "api/organizations/get_v2_organizations_id",
        "api/organizations/patch_v2_organizations_id",
        "api/organizations/delete_v2_organizations_id",
        "api/organizations/get_v2_organizations_search"
      ]
    },
    {
      "type": "category",
      "label": "Usage API",
      "items": [
        "api/usage/get_v2_usage",
        "api/usage/post_v2_usage",
        "api/usage/get_v2_usage_id",
        "api/usage/patch_v2_usage_id",
        "api/usage/delete_v2_usage_id",
        "api/usage/get_v2_usage_search"
      ]
    },
    {
      "type": "category",
      "label": "Webhook events",
      "items": [
        "events/configuration-changed",
        "events/boundary-changed",
        "events/session-closed",
        "events/evaluation-completed",
        "events/alert-opened",
        "events/token-revoked"
      ]
    }
  ]
}