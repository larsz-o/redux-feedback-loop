-- Database should be prime_feedback
CREATE DATABASE "dinner_diary";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "taste" INT not null,
  "texture" INT not null,
  "creativity" INT not null,
  "nutrition" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("taste", "texture", "creativity", "nutrition", "comments")
VALUES (4, 4, 5, 3, 'Doing Great!');
