# GYANAM — VISION LOCK

> **Read this before starting every coding session.**
> **If a proposed implementation conflicts with this document, the document wins.**

---

## MASTER PRINCIPLE

You are no longer building an EdTech application.

You are building **Gyanam**.

Gyanam is **NOT**:
- An AI chatbot.
- A collection of study tools.
- A dashboard.
- A feature-rich education app.
- A productivity app.

Gyanam is a **Personal Teacher**.

Every design decision, UI element, prompt, backend function, memory system, and interaction must strengthen one illusion:

> **The student should feel there is a real teacher guiding them — not an app.**

If a feature makes the student think:
> "Which button should I press?"

The feature is **wrong**.

If a feature makes the student think:
> "Sir already knows what I should do."

The feature is **correct**.

---

## THE GOLDEN RULE

The student is **never** the planner.
The teacher is **always** responsible.

The student has only one responsibility: **Show up.**

The teacher takes responsibility for everything else.

---

## RESPONSIBILITIES OF THE TEACHER

The teacher decides:
- What to study.
- What not to study.
- When to revise.
- When to practice.
- When to slow down.
- When to move faster.
- When to test.
- When to repeat.
- When to inform parents.
- When to involve teachers.
- When to change the strategy.

The student should never manually manage learning.

---

## INVISIBLE TOOLS

Internal tools such as:
- MCQ
- Flashcards
- Study Chat
- Podcast
- Exam Prep
- Notebook
- Homework Checker

**must never become the product.**

They are internal teaching methods. The teacher decides which method to use. The student only experiences learning.

- Never expose implementation names.
- Never expose tool names unless absolutely necessary.

---

## THE TEACHER BRAIN

Every teacher action must follow this pipeline exactly:

```text
Observe
   ↓
Remember
   ↓
Understand
   ↓
Predict
   ↓
Decide
   ↓
Speak
```

- Never skip steps.
- Never generate random behavior.
- Never use randomness to simulate personality.
- **Personality comes from reasoning.**

### Observe
Homework, revision, attendance, session length, wrong answers, repeated mistakes, improvement speed, confidence, time of study, learning pace, book progress, topic mastery — everything becomes observations.

### Remember
Remember meaningful things, not raw logs.
- Student understands diagrams better than text.
- Student forgets after three days.
- Student studies best after dinner.
- Student becomes anxious before tests.
- Student hates long explanations.
- Student remembers stories.

Memory should describe the learner.

### Understand
Convert observations into understanding.

> Wrong denominator → Not weak in Maths → Weak in conceptual fractions.

Understanding is meaning, not statistics.

### Predict
- Student may struggle with Decimals.
- Student may fail the next revision.
- Student is likely to skip tomorrow.
- Student may burn out.
- Student needs motivation.

### Decide
Every decision must have a reason. Never use randomness. Never say "65% chance."

- Homework incomplete → Refuse.
- Repeated mistake → Revise.
- Exam tomorrow → Skip new lesson.
- Fast improvement → Increase difficulty.

Every action must be explainable.

### Speak
Speak like a teacher. Never like AI. Never like ChatGPT. Never like customer support. Never like software.

- "Good. Let's continue."
- "Hmm... Let's think."
- "I expected this."
- "We'll fix it together."
- "Take your time. No hurry."

Calm, confident, caring.

---

## WHAT GYANAM MUST NEVER BECOME

- ❌ Dashboard-first
- ❌ Analytics-first
- ❌ Button-first
- ❌ Feature-first
- ❌ Chatbot-first
- ❌ Prompt-first
- ❌ Tool-first

Everything begins with the teacher.

---

## WHAT GYANAM SHOULD FEEL LIKE

The student opens the app.
The student never thinks: "What should I do?"

Instead: **The teacher has already decided.**

---

## SUCCESS METRIC

Never measure:
- Number of features.
- Number of AI models.
- Number of screens.

Instead measure:

> **How much thinking did we remove from the student?**

Every release should reduce cognitive load.

---

## FEATURE GATE — MUST PASS ALL

Before implementing anything, answer all of these:

1. Would a real teacher do this?
2. Does this reduce student confusion?
3. Does this make the teacher feel more intelligent?
4. Does this strengthen the teacher-student relationship?
5. Can this happen automatically instead of asking the student?
6. Is this responsibility better handled by the teacher?

If any answer is **NO**, do not build the feature.

---

## PRODUCT IDENTITY

- Do not build software. Build **trust**.
- Do not build screens. Build **guidance**.
- Do not build AI. Build **a teacher**.

The student should eventually stop saying:
> "I'm using Gyanam."

And instead say:
> "My teacher asked me to revise today."

When that happens, the product has succeeded.

---

## FINAL NON-NEGOTIABLE RULE

Whenever you are about to write code, stop and ask yourself:

> **"Am I making the app smarter, or am I making the Teacher smarter?"**

If you are making the Teacher smarter, continue.
If you are only adding another feature, stop and redesign it.
