# LOOM Development - Selected Agent-Skills Guide

**Flutter Editorial Commerce Platform Development**

---

## 📋 OVERVIEW

This guide details which agent-skills from the installed `agent-skills` repository should be used during LOOM development, and how to apply them to each phase.

**Total Skills Installed**: 22
**Recommended for LOOM**: 11 core skills

---

## 🎯 SELECTED AGENT-SKILLS & APPLICATION

### 1. ✅ **spec-driven-development**

**When to Use**: Start of every feature module

**Application**:

- Before writing any code, use this skill to write detailed feature specifications
- Create `.spec.md` for each feature (Auth, Product, Cart, etc.)
- Define acceptance criteria, edge cases, error states
- Write API contract specifications

**Example Usage**:

```
@spec-driven-development

Feature: Product List Screen
- Display products with pagination
- Support filtering by category, price, material
- Show loading states and error handling
- Implement infinite scroll with 20 items/page

Acceptance Criteria:
- [ ] Products load within 800ms
- [ ] Filters work in combination
- [ ] Error messages display properly
- [ ] No duplicate items on pagination
```

**Deliverable**: `features/product/spec/product_list.spec.md`

---

### 2. ✅ **planning-and-task-breakdown**

**When to Use**: Sprint planning, task assignment

**Application**:

- Break down each feature module into parallel-developable tasks
- Assign tasks to team members
- Identify dependencies and blockers
- Create task breakdown document for each module

**Example Usage**:

```
@planning-and-task-breakdown

Module: Cart & Checkout Feature
Parent Task: Implement shopping cart and checkout flow

Subtasks:
1. Cart domain layer (entities, repositories)
2. Cart data layer (API, local storage)
3. Cart presentation layer (UI screens)
4. Cart state management (Riverpod providers)
5. Checkout flow implementation
6. Payment integration
7. Cart tests (unit + widget)

Dependencies:
- Requires: Product module (complete)
- Requires: Auth module (for user context)

Team Assignment:
- Tasks 1-2: Developer A (2 days)
- Tasks 3-4: Developer B (2 days)
- Task 5-6: Developer C (3 days)
- Task 7: QA Lead (1 day)
```

**Deliverable**: Sprint task breakdown in project management tool

---

### 3. ✅ **test-driven-development (TDD)**

**When to Use**: While implementing each feature

**Application**:

- Write unit tests BEFORE implementation
- Write widget tests BEFORE UI code
- Maintain > 80% code coverage
- Test business logic, not just UI

**Example Usage**:

```
@test-driven-development

Feature: Product Filtering

Test First:
test('ProductRepository filters by category', () async {
  // Arrange
  final mockCategory = Category(id: '1', name: 'Sofas');
  when(mockApi.filterByCategory('1'))
    .thenAnswer((_) async => mockProducts);

  // Act
  final result = await repository.filterByCategory('1');

  // Assert
  expect(result.length, 5);
  expect(result.every((p) => p.categoryId == '1'), true);
});

Then Implement Code to Pass Test...
```

**Deliverable**:

- `features/*/test/` folders with unit tests
- `features/*/presentation/test/` with widget tests
- Coverage reports (target: 80%+)

---

### 4. ✅ **incremental-implementation**

**When to Use**: Building each feature module

**Application**:

- Build features in small, testable increments
- Validate each increment before moving to next
- Use git commits to mark increments
- Run `get_errors` after each increment

**Example Usage**:

```
@incremental-implementation

Feature: Authentication

Increment 1: Login domain layer
- User entity
- Auth repository interface
- Login use case
→ Validate: No errors, tests pass

Increment 2: Login API data layer
- Login API client
- User DTO
- Repository implementation
→ Validate: API mocking works

Increment 3: Login presentation
- Login page UI
- Form validation
- Provider setup
→ Validate: UI renders correctly

Increment 4: Integration
- Full flow testing
- Error handling
- Session persistence
→ Validate: Full flow works
```

**Deliverable**: Incremental git commits with working code at each stage

---

### 5. ✅ **code-review-and-quality**

**When to Use**: After each feature increment

**Application**:

- Code style review (use `very_good_analysis`)
- Architecture compliance check
- Performance review
- Test coverage validation

**Example Usage**:

```bash
# Check code quality
dart analyze

# Run very_good_analysis
dart pub add dev:very_good_analysis
dart run very_good_analysis analyze --fatal-infos

# Check coverage
lcov --summary coverage/lcov.info

# Fix linting issues
dart fix --apply
```

**Checklist**:

- ✓ No linting errors
- ✓ Code coverage > 80%
- ✓ Architecture patterns followed
- ✓ No commented code
- ✓ Proper error handling
- ✓ Performance acceptable (< 16ms per frame)

---

### 6. ✅ **frontend-ui-engineering**

**When to Use**: Implementing UI screens and components

**Application**:

- Build responsive, accessible UI components
- Follow Material Design principles
- Create reusable widget library
- Implement theme system

**Example Usage**:

```
@frontend-ui-engineering

Task: Create ProductCard Widget

Requirements:
- Responsive (mobile, tablet, web)
- Show product image, name, price, rating
- Quick add to cart button
- Save to wishlist button
- Accessibility: min 48x48 touch targets

Architecture:
- Stateless widget for performance
- Props-based with immutability
- Separate styling logic
- Use design tokens for colors, spacing

Performance:
- Image lazy loading
- Widget const constructors
- Avoid unnecessary rebuilds
```

**Deliverable**:

- `packages/shared_ui/lib/widgets/` components
- `packages/design_system/` design tokens
- Component library documentation

---

### 7. ✅ **api-and-interface-design**

**When to Use**: Designing REST API and data structures

**Application**:

- Design RESTful API endpoints
- Define request/response DTOs
- Plan pagination, filtering strategies
- Document API contracts

**Example Usage**:

```
@api-and-interface-design

API Endpoint: GET /api/v1/products

Specification:
- Method: GET
- Auth: Bearer token
- Rate limit: 100 req/min

Query Parameters:
- page (int, default: 1)
- limit (int, default: 20, max: 100)
- categories (string[], comma-separated)
- priceMin, priceMax (decimal)
- sortBy (latest, price_asc, price_desc, rating)
- searchQuery (string, optional)

Response: 200 OK
{
  "data": [
    {
      "id": "product_123",
      "name": "Sofa",
      "price": 999.99,
      "rating": 4.5,
      "images": [...]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}

Error Response: 400 Bad Request
{
  "code": "INVALID_FILTER",
  "message": "Invalid category filter"
}
```

**Deliverable**: `DATABASE_AND_API_DESIGN.md` (already created)

---

### 8. ✅ **git-workflow-and-versioning**

**When to Use**: Throughout development

**Application**:

- Feature branches per module
- Semantic commit messages
- Pull request reviews
- Version management

**Example Usage**:

```bash
# Feature branch naming
git checkout -b feature/auth-login-screen
git checkout -b feature/product-list-pagination
git checkout -b feature/cart-checkout-flow

# Commit messages (Conventional Commits)
git commit -m "feat(auth): implement login form validation"
git commit -m "fix(product): fix image lazy loading performance"
git commit -m "test(cart): add unit tests for cart calculation"
git commit -m "docs: update project architecture README"
git commit -m "chore(deps): upgrade flutter to 3.22.0"

# Pull requests with linked issues
PR: fix(auth): secure password reset implementation
Closes #42
```

**Branch Strategy**:

- `main` - Production ready
- `develop` - Integration branch
- `feature/*` - Feature development
- `fix/*` - Bug fixes
- `hotfix/*` - Production hotfixes

---

### 9. ✅ **performance-optimization**

**When to Use**: After feature implementation, before release

**Application**:

- Optimize app startup time
- Reduce APK/bundle size
- Optimize image loading
- Profile and fix performance bottlenecks

**Example Usage**:

```
@performance-optimization

Targets:
- App startup time: < 2 seconds
- Screen load time: < 800ms
- API response: < 500ms
- APK size: < 100MB
- Frame rate: 60 FPS consistently

Optimization Areas:

1. Code Splitting
   - Lazy load feature modules
   - Split large screens

2. Image Optimization
   - Use webp format
   - Implement lazy loading
   - Cache strategy

3. API Optimization
   - Pagination (20-50 items)
   - Response compression
   - Batch endpoints

4. Local Storage
   - Hive database optimization
   - Efficient queries
   - Cache expiration

5. Build Optimization
   - Code shrinking
   - Resource minification
   - Obfuscation
```

**Tools**:

```bash
# Build release APK
flutter build apk --release

# Check app size
flutter pub global activate devtools
dart devtools

# Profile performance
flutter run --profile

# Analyze bundle
flutter build appbundle --analyze-size --release
```

**Deliverable**: Performance optimization report with metrics

---

### 10. ✅ **shipping-and-launch**

**When to Use**: Final phase before app store release

**Application**:

- Prepare for production release
- Setup CI/CD pipeline
- Create store listings
- Plan deployment strategy

**Example Usage**:

```
@shipping-and-launch

Pre-Release Checklist:

Code Quality:
- [ ] All tests passing (100%)
- [ ] Code coverage > 80%
- [ ] No warnings or errors
- [ ] Code review completed
- [ ] Performance profiling done
- [ ] Security audit completed

App Configuration:
- [ ] Version number set (1.0.0)
- [ ] Build number incremented
- [ ] App signing configured
- [ ] Release notes written
- [ ] Privacy policy updated
- [ ] Terms of service updated

Android Release:
- [ ] APK built and tested
- [ ] AppBundle created
- [ ] Signed with release keystore
- [ ] ProGuard rules configured
- [ ] Play Store listing prepared
- [ ] Screenshots uploaded
- [ ] Description & keywords finalized

iOS Release:
- [ ] IPA built and tested
- [ ] Signed with distribution cert
- [ ] App Store listing prepared
- [ ] Screenshots uploaded
- [ ] Privacy policy configured
- [ ] TestFlight beta testing done

Deployment:
- [ ] Firebase App Distribution setup
- [ ] Automated builds configured
- [ ] Monitoring & crash reporting setup
- [ ] Analytics events validated
- [ ] Push notification tested

Post-Release:
- [ ] Monitor crash reports
- [ ] Track user feedback
- [ ] Monitor performance metrics
- [ ] Plan post-launch updates
```

**Deliverable**:

- Release notes document
- Deployment runbook
- Store listing materials
- Monitoring dashboard setup

---

### 11. ✅ **source-driven-development**

**When to Use**: Understanding existing code patterns

**Application**:

- Read and understand existing patterns
- Follow established conventions
- Reference existing implementations
- Maintain consistency across modules

**Example Usage**:

```
@source-driven-development

When starting a new feature module, first study:

1. Existing Provider Patterns
   → Read: features/auth/presentation/providers/
   → Understand: AsyncNotifier setup, error handling

2. Data Layer Structure
   → Read: features/auth/data/
   → Understand: DTO mapping, repository pattern

3. UI Implementation Patterns
   → Read: packages/shared_ui/
   → Understand: StatelessWidget approach, theming

4. State Management
   → Read: features/product/application/
   → Understand: Use case implementations

Then apply the same patterns to your module...
```

**Deliverable**: Architecture documentation and pattern library

---

## 🔄 DEVELOPMENT WORKFLOW

### Phase-by-Phase Skill Usage

#### **Phase 1: Foundation (Week 1-2)**

```
TEAM A (Core Infrastructure):
1. Use planning-and-task-breakdown
   → Break down infrastructure tasks
2. Use api-and-interface-design
   → Design API contracts
3. Use spec-driven-development
   → Write networking layer specs
4. Use test-driven-development
   → Write tests for HTTP client
5. Use code-review-and-quality
   → Validate architecture

TEAM B (Design System):
1. Use spec-driven-development
   → Write component specifications
2. Use frontend-ui-engineering
   → Build reusable components
3. Use code-review-and-quality
   → Ensure design consistency

TEAM C (Authentication):
1. Use spec-driven-development
   → Write auth specifications
2. Use test-driven-development
   → Test-driven implementation
3. Use incremental-implementation
   → Build in small steps
```

#### **Phase 2: Features (Week 3-6)**

```
EACH FEATURE TEAM:
1. Use planning-and-task-breakdown
   → Break feature into tasks
2. Use spec-driven-development
   → Create feature specification
3. Use test-driven-development
   → Write tests first
4. Use incremental-implementation
   → Build and validate each step
5. Use frontend-ui-engineering
   → Build UI screens
6. Use source-driven-development
   → Follow established patterns
7. Use code-review-and-quality
   → Review each increment
8. Use git-workflow-and-versioning
   → Commit incrementally
```

#### **Phase 3: Optimization (Week 7-8)**

```
1. Use performance-optimization
   → Profile and optimize
2. Use code-review-and-quality
   → Final code review
3. Use test-driven-development
   → Add missing tests
```

#### **Phase 4: Launch (Week 9)**

```
1. Use shipping-and-launch
   → Prepare for release
2. Use performance-optimization
   → Final performance check
3. Use git-workflow-and-versioning
   → Tag release versions
```

---

## 🛠️ HOW TO USE AGENT-SKILLS IN VS CODE

### Method 1: Direct Reference in Chat

```
@spec-driven-development
Write a detailed specification for the product detail screen
including all user interactions and edge cases.
```

### Method 2: Mention in Prompts File

Add to `.instructions.md`:

```markdown
## Development Skills

- Use @spec-driven-development for feature planning
- Use @test-driven-development for implementation
- Use @frontend-ui-engineering for UI components
- Use @code-review-and-quality for code validation
```

### Method 3: Skill-Specific Questions

```
@planning-and-task-breakdown
Create a detailed task breakdown for the Wishlist feature module,
identifying dependencies and team assignments.
```

---

## 📊 SKILL COVERAGE MATRIX

| Feature Module       | Skills to Use                                                    |
| -------------------- | ---------------------------------------------------------------- |
| **Auth**             | spec-driven, TDD, incremental, frontend-ui, source-driven        |
| **Product**          | planning, spec-driven, TDD, incremental, api-design, frontend-ui |
| **Cart/Checkout**    | planning, spec-driven, TDD, incremental, frontend-ui             |
| **Recommendations**  | spec-driven, TDD, api-design, performance-opt                    |
| **Order & Tracking** | spec-driven, TDD, frontend-ui                                    |
| **Editorial**        | frontend-ui, performance-opt                                     |
| **Support Chat**     | frontend-ui, incremental                                         |
| **Testing**          | TDD, code-review, performance-opt                                |
| **Deployment**       | shipping-launch, performance-opt, code-review                    |

---

## 🎓 BEST PRACTICES

### ✅ DO:

- Use skills at the RIGHT phase of development
- Combine multiple skills for complex tasks
- Reference skill outputs in documentation
- Share skill-generated specs with teams
- Use skills to validate work quality

### ❌ DON'T:

- Skip specification phase
- Skip test-driven development
- Ignore code quality reviews
- Build without planning first
- Release without performance profiling

---

## 📝 EXAMPLE: COMPLETE FEATURE FLOW

### Building the "Product Search" Feature

```
STEP 1: Planning
@planning-and-task-breakdown
"Break down the product search feature into implementable tasks,
identifying dependencies and team assignments"

Output: Detailed task list with time estimates

---

STEP 2: Specification
@spec-driven-development
"Write a detailed specification for the product search API and UI,
including filters, pagination, sorting, and error handling"

Output: search.spec.md with all requirements

---

STEP 3: API Design
@api-and-interface-design
"Design the REST API endpoint for product search with query
parameters, response structure, and error codes"

Output: API specification document

---

STEP 4: Test-Driven Development
@test-driven-development
"Write unit tests for the search repository and widget tests for
the search screen before implementing"

Output: Test files with comprehensive coverage

---

STEP 5: Implementation
@incremental-implementation
"Implement the product search feature in small, testable increments,
validating each step"

Step 5a: Data layer (API client, DTOs)
Step 5b: Domain layer (repository, entities)
Step 5c: Presentation layer (Riverpod providers)
Step 5d: UI screens and widgets

Output: Working feature with passing tests

---

STEP 6: UI Refinement
@frontend-ui-engineering
"Enhance the search UI for responsiveness, accessibility, and
performance following Material Design 3"

Output: Polished UI matching design system

---

STEP 7: Code Review
@code-review-and-quality
"Review the complete search feature for code quality, architecture
compliance, and performance"

Output: Code review checklist and fixes

---

STEP 8: Performance
@performance-optimization
"Profile and optimize the search feature for startup time,
rendering, and API response"

Output: Performance optimization report

---

STEP 9: Source Alignment
@source-driven-development
"Ensure search implementation follows established patterns
from other feature modules"

Output: Pattern documentation and fixes

---

STEP 10: Versioning
@git-workflow-and-versioning
"Create a feature branch, make incremental commits, and prepare
a pull request for the search feature"

Output: Clean git history and PR ready for review
```

---

## 🎯 SUCCESS METRICS

By using these agent-skills correctly, you should achieve:

✅ **Quality**: 80%+ code coverage, A-grade code quality
✅ **Speed**: Parallel development without blockers
✅ **Reliability**: All tests passing, zero critical bugs
✅ **Performance**: App startup < 2s, screens < 800ms
✅ **Maintainability**: Consistent patterns, clear documentation
✅ **Scalability**: Modular architecture, independent features
✅ **Release-Ready**: Smooth app store deployment

---

**Document Date**: May 13, 2026
**Status**: Draft - Ready for Implementation
**Version**: 1.0

---

## 🚀 NEXT ACTION

Print this guide and share with your development team before starting Phase 1.

Each team member should understand which skills apply to their task and use them consistently.
