# IELTS Listening Review Automation Skill

This document outlines the standardized process for creating listening review HTML files from raw test content.

## 1. Input Processing
- **Raw HTML Source**: The user provides raw HTML content.
- **Transcript Extraction**: Copy the content from the `et_pb_text_inner` div for each Section.
- **Answer Markers**: Usually marked with `(Q1)`, `(Q2)`, etc. These are **already bolded** in the raw HTML provided by the user. Do not manually re-verify against the key at the bottom unless the bolding is missing.

## 2. Audio URL Logic
The audio source must follow this strict pattern:
- **Base URL**: `https://app.ieltspracticeonline.com/Full-Test-Listening/test-{X}/`
- **Filename**: `T{X}S{Y}.mp3` (where Y is the Part/Section number 1-4)
- **Example (test-2, Part 1)**: `https://app.ieltspracticeonline.com/Full-Test-Listening/test-2/T2S1.mp3`

## 3. HTML Template (Reusable)
Each file must maintain this structure:
```html
<header>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no" />
    <link rel="stylesheet" href="../../style.css">
</header>
<div class="et_pb_text_inner">
    <h3><span style="font-size: xx-large;"><strong>SECTION {Y}</strong></span></h3>

    <div class="audio-player-container">
        <audio controls class="audio-player">
            <source src="https://app.ieltspracticeonline.com/Full-Test-Listening/test-{X}/T{X}S{Y}.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>

    {TRANSCRIPT_CONTENT}
</div>
```

## 4. Processing Steps
1.  **Identify Test Number**: Determine `{X}`.
2.  **Split Raw Content**: Segment based on `SECTION 1-4`.
3.  **Clean Content**: Remove ads (script tags) and unnecessary empty tags.
4.  **Inject Values**: Insert Audio URL and cleaned Transcript into the template.
5.  **Write Files**: Save to `full-listening/test-{X}/review-part-{Y}.html`.
