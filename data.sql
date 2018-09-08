-- Database should be dinner_diary
CREATE DATABASE "dinner_diary";
-- Table to store feedback 
CREATE TABLE "feedback" (
  "id" serial primary key,
  "taste" INT not null,
  "texture" INT not null,
  "creativity" INT not null,
  "nutrition" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE, 
  "meal" varchar(250) not null, 
); 
-- Sample feedback item
INSERT INTO "feedback" ("taste", "texture", "creativity", "nutrition", "comments", "meal")
VALUES (4, 4, 5, 3, 'I loved this meal!', 'butternut squash soup');

--adds all ratings to get a total score 
SELECT COALESCE ("taste") + ("texture") + ("creativity") + ("nutrition") AS "total" FROM "feedback";

