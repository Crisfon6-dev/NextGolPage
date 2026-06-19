# CLAUDE.md

## Knowledge Brain (.brain)

This project has a persistent knowledge vault at `./.brain` (an Obsidian vault, LLM-maintained, Karpathy pattern). Treat it as the project's long-term memory.

- **Read first:** `.brain/CLAUDE.md` (domain schema + critical rules), then `.brain/index.md` (catalog) and `.brain/hot.md` (recent context cache).
- **Domain truth:** company/brand context lives in `.brain/wiki/entities/NextGol.md`; strategy source-of-truth is `01-MARKET-RESEARCH.md`, `02-BUSINESS-MODEL.md`, `03-LANDING-PAGE-SPEC.md`.
- **Write rules:** follow `.brain/CLAUDE.md` — frontmatter on every page, `[[wikilinks]]`, one concept per page, append new entries under "Recent activity" in `index.md`. Do NOT hand-edit `log.md` (session hooks own it).
- **Access:** the Obsidian MCP (`mcp__obsidian-vault__*`) is scoped to this project folder and is the bridge for reading/writing the vault.

## Behavioral Rules

- Do what has been asked; nothing more, nothing less
- NEVER create files unless they are absolutely necessary for the task
- ALWAYS prefer editing an existing file to creating a new one
- NEVER proactively create documentation files (*.md) or README files unless explicitly requested
- ALWAYS read a file before editing it
- NEVER commit secrets, credentials, or .env files

## File Organization

- Use `src/` for source code
- Use `tests/` for test files
- Use `docs/` for documentation
- Use `config/` for configuration files
- Use `scripts/` for utility scripts

## Tech Stack



## Build & Test

```bash
# Build
# TODO: fill in project build command

# Test
# TODO: fill in project test command

# Lint
# TODO: fill in project lint command
```

- ALWAYS run tests after making code changes
- ALWAYS verify the build succeeds before committing

## Architecture

- Follow Domain-Driven Design with bounded contexts
- Keep files under 500 lines
- Use typed interfaces for all public APIs
- Use event sourcing for state changes where applicable
- Ensure input validation at system boundaries

## Security Rules

- NEVER hardcode API keys, secrets, or credentials in source files
- NEVER commit .env files or any file containing secrets
- Always validate user input at system boundaries

## Concurrency: 1 MESSAGE = ALL RELATED OPERATIONS

- Batch all related file reads/writes/edits in a single message
- Run independent operations in parallel

## OpenSpec Workflow

This project uses the spec-driven openspec workflow.

- Use `/opsx-propose` to start a new change
- Use `/opsx-apply` to implement tasks
- Use `/opsx-explore` to think through ideas before coding
- Use `/opsx-archive` to finalize a completed change

@~/.claude/CLAUDE.personal.md
