/**
 * Typed accessor for the shared user-agent fixtures. Importing the JSON
 * directly yields an object literal type without a string index signature,
 * which prevents dynamic lookups like AGENTS[key] under strict mode. This
 * helper re-exports the fixtures typed as Record<string, string> so tests can
 * both access known keys and iterate over the map.
 */
import userAgents from "./user-agents.json";

const AGENTS: Record<string, string> = userAgents;

export default AGENTS;
