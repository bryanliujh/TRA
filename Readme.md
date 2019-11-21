# Instruction

First of all, congratulations on being shortlisted for this round of the assessment.

# Scenario

You are tasked to conduct a code review on a code repository submitted by a candidate applying for a software engineer role in TAP Software Team.

Provided this code repository, you are required to identify the following:

1. Code design issues
1. Code smells
1. Any undesirable coding practices
1. Any other issues you wish to highlight

The requirements for the candidate is shown in [`requirement.md`](requirement.md) file.

You are required to explain your findings to the hiring committee and provide your final assessment whether this candidate will be shortlisted for the next round of interview.

# Running the test

Follow these instructions to get the service up and running locally on your computer:

1. Clone this repo onto your computer.
1. Setup MySQL and specify the host IP/URL and user credentials in `src/pool.js`.
1. Create a `testdb` database, and setup the schema and seed data with `testdb.sql`.
1. Run `npm install` in the root directory of this repo.
1. Run `npm test`. The tests should be all passing.
1. Run `npm run dev` to start the server in dev mode.
