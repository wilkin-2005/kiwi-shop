
# Naming Conventions

|        Element               |        Naming Style                                   |        Example                                                        |
|------------------------------|-------------------------------------------------------|---------------------------------------------------------------------- |
| **File Names**               | **kebab-case** (lowercase, hyphens)                   | `user-profile.tsx` (✅) `UserProfile.tsx` (❌)                       |
| **Folder Names**             | **kebab-case** (lowercase, hyphens)                   | `user-profile/` directory e.g. `dashboard-settings/`                  |
| **React Components**         | **PascalCase** (upper camel case)                     | `UserProfile` component in code (e.g. `function UserProfile() {...}`) |
| **Variables**                | **camelCase** (lowercase start)                       | `let userProfileData = ...`                                           |
| **Constants**                | **UPPER_SNAKE_CASE** (all caps, underscores)          | `const API_BASE_URL = "...";`                                         |
| **Functions**                | **camelCase** (usually a verb phrase)                 | `function fetchUserData() {...}`                                      |
| **Custom Hooks**             | **camelCase** with use prefix                         | `function useAuth() {...}` (must start with "`use`")                  |
| **CSS Classes**              | **kebab-case** (Tailwind utilities or custom classes) | Tailwind example: `bg-blue-500` Custom class: `.btn-primary`          |
| **Types & Interfaces**       | **PascalCase** (no I prefix)                          | `interface UserProfileProps { ... }`                                  |
| **Environment Variables**    | **UPPER_SNAKE_CASE** (all caps, underscores)          | `API_BASE_URL = "...";`                                               |
| **Query Parameters**         | **snake_case**                                        | `/users?page_number=2&sort_by=name`                                   |
| **Local Storage Keys**       | **camelCase** (optional prefix)                       | `localStorage.setItem('userSettings', ...)`                           |
| **Session Storage **Keys**** | **camelCase** (optional prefix)                       | `sessionStorage.setItem('currentSessionId', ...)`                     |
| **Cookies**                  | **camelCase** (optional prefix, security flags)       | `document.cookie = "sessionId=abc123; path=/; Secure; HttpOnly";`     |
|                              |                                                       |                                                                       |

---

For full naming conventions, see [Next.js Naming Conventions](https://www.piyushgambhir.com/blogs/next-js-naming-conventions)