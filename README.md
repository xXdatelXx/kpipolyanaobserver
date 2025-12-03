# KPI Polyana Compliance Extension

This Visual Studio Code extension enforces a strict **Friday evening productivity policy** aligned with the long-standing cultural practice known as **“KPI Polyana.”**
Its purpose is to ensure that developers do not engage in coding activities during designated social hours.

---

## Overview

The extension intercepts all typing actions within the editor.
If the user attempts to write code **on Friday after 18:00 local time**, the action is blocked and a warning message is displayed.

This mechanism promotes a healthier work–life balance and prevents unauthorized overtime during community-designated hours.

---

## Features

* **Real-time restriction of text input** on Friday evenings.
* **Non-intrusive operation** outside of restricted hours.
* **Automatic enforcement** without any configuration required.
* **Clear user notification** when a typing attempt is prevented.

---

## Rationale

KPI Polyana represents a traditional, time-bound community event that is widely observed among Kyiv Polytechnic Institute students and alumni.
In accordance with this practice, professional or academic work during Polyana hours is discouraged.

This extension formalizes that rule within the development environment, preventing accidental or deliberate violation.

---

## Behavior Specification

The restriction is activated when both of the following conditions are met:

1. **Day:** `Friday` (`getDay() === 5`)
2. **Time:** `18:00` or later (`getHours() >= 18`)

When these conditions are satisfied:

* The `type` command is intercepted.
* The user’s input is not forwarded to the default text handler.
* A warning message is shown:

  > “Writing code is disabled until Polyana time!”

At all other times, the extension delegates typing events to the VS Code default behavior.

---

## Installation

1. Open **Visual Studio Code**.
2. Navigate to **View → Extensions**.
3. Search for **KPI Polyana Observer**.
4. Reload the editor if prompted.
5. No further setup is necessary.

---

## Intended Audience

* Software engineers working within the KPI ecosystem
* Teams adhering to Polyana-based social schedules
* Individuals seeking automated enforcement of downtime policies

---

## License

This project may be used, modified, or extended in accordance with its associated license file.

---

## Acknowledgements

This extension is inspired by long-standing community traditions and aims to uphold them in a formalized, predictable manner.
