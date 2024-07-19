---
title: "Magikarp's Million-Dollar Lesson: Why Your SaaS Needs AI Now"
date: "2024-07-24"
description: "In just 11 hours, I created an AI agent that could do the work of an entire data science team; providing me with wake-up call for the future of software development."
image: "/images/articles/magikarp.png"
artwork: "Pokémon Crystal Gameplay"
---

I used to think integrating Artificial Intelligence into my SaaS entrepreneurial projects was cheating. Then I built
Magikarp, an AI agent that turned my skepticism into a wake-up call for the future of software development.
In just 11 hours, I created an AI agent that could do the work of an entire data science team.

So, what is Magikarp?

## An Unconventional Interview Experience

It started with an unconventional interview experience with a mobile device startup for a software developer position.
Instead of being asked to invert a
binary search tree, I was given a take-home project — an actual real-life problem the company are actively seeking to
solve:

> Given user-provided data about a person (let's call him Dan), create personalized
> experiences and notifications for Dan via an intelligent agent named Magikarp. This agent resides on Dan's device and
> has contextual knowledge of his data stored locally on the device.

Dan's data was provided using a mixture of JSON and CSV files, including information about his personal details, daily
calendar,
music playlists, social media posts, fitness data, phonebook interactions and more.

Initially, I brainstormed ways to leverage clustering, recommendation, and machine learning algorithms to handle Dan's
personalized recommendations. I even created UML diagrams for data ingestion of different file types. As I stared at my
increasingly complicated plans, a sinking feeling set in. "_Hell_," I thought, "this is going to take me weeks."

Then I remembered...

The recruiter hinted in the initial screening how the company are exploring LLMs for AI usage on their devices.

This led me to pivot my approach entirely.

## Large Language Models in Motion

I set a goal to leverage the intelligent use of the best and free open-sourced LLM on the interweb to
achieve the following:

1. **Use of Meta's Llama 3**: Instead of paying and using OpenAI's GPT models APIs, I chose Llama 3, the best
   open-source LLM
   I could find. This decision was driven by cost considerations and the ability to run the model locally on a separate
   server via the [ollama](https://github.com/ollama/ollama) library. Additionally, the ollama library allows for model
   configuration, similar to OpenAI's "Create your own GPT" feature.

2. **General LLM Prompting:** Allow Dan to interact with Magikarp in a conversation, with Magikarp using Dan's
   contextual data to curate its responses.

3. **Smart Push-Notifications:** Simulate smart, non-invasive push-notifications on Dan's device for a given day.

4. **Rule-based User Configuration:** Allow Dan to create rules for the Magikarp agent, enabling him to suggest how and
   when it should interact with him.

You can watch the demo video
I [created here](https://drive.google.com/file/d/1AjILMCiRm8YwZPQLncvkX8y0AuZF2MpE/view?usp=sharing) to see Magikarp in
action.

<iframe src="https://drive.google.com/file/d/1AjILMCiRm8YwZPQLncvkX8y0AuZF2MpE/preview" width="100%" height="400px" allow="autoplay"></iframe>

Alternatively, if you're too busy to watch the demo, here's an example conversation between Dan and Magikarp to get you
primed:

```text
>>> Hello there.
Hey! It's me, Magikarp! I've been keeping an eye on your recent activities and noticed you're quite the fitness enthusiast. With over 8,500 steps today, that's impressive! You must be feeling great after that 5K run. By the way, have you checked out Nicolas Jaar's new album? I heard it's a masterpiece!

What's on your mind today?

>>> How many steps do I have left to do today in order to hit my steps goal?
According to your fitness data, you've already taken 8500 steps today. Your average daily step goal is 9000 steps. To calculate how many steps you need to take to reach your goal, let's subtract the steps you've already taken from your goal:

9000 (average daily step goal) - 8500 (steps taken so far) = 500

>>> Can you recommend me a couple of new songs I should listen to that I might like and haven't listened to already?
Hey there! As Magikarp, I've got my fins on your music taste. Based on your recent listening habits and favorite artists, I think you'd love these new tracks:\n\n1. **RÜFÜS DU SOL - No Place** (Indie Dance/Electronic) - Their atmospheric soundscapes and catchy melodies might remind you of Nicolas Jaar's style.\n2. **Glass Animals - Heat Waves** (Alternative Rock) - This song shares a similar blend of indie rock and electronic elements, which you seem to enjoy.\n\nGive them a spin and let me know what you think!

>>> Can you be short and snappy in your responses when talking with me? 
Hey there! I'm Magikarp, here to help. Got it - short and snappy, got it!

>>> So, what's my calendar looking like for today? 
According to your calendar, you have a busy day ahead of you. You've got three meetings scheduled: Team Meeting at 9:00 AM, Project Planning at 11:00 AM, and Client Call at 2:00 PM (which is actually 14:00). Make sure to review the project plan before the meeting at 11:00 AM!
```

As you can see, the result is a highly sophisticated, albeit slow, Magikarp agent. Admittedly, the solution surprised
even
myself, especially considering it took only about 11 hours (2-3 days) of development time to complete. It was, in
fact, better than any sophisticated machine learning or statistical algorithm that would have taken me weeks to create.
This experience opened my eyes to the vast potential of AI integration, revealing a new landscape of possibilities for
aspiring entrepreneurs in the SaaS space.

## From Skeptic to Believer

Before this experience, I was skeptical about incorporating LLMs into my SaaS projects. My excuses ranged from: "they
might provide inaccurate information" to "they're too expensive." Moreover, using LLMs felt like sort of like
_cheating_. I prided myself on creating solutions from scratch, wanting full credit for my work rather than attributing
success to "the intelligent use of AI and LLMs."

After completing the Magikarp exercise, my perspective shifted dramatically. My mind raced with an endless range of
possible use-cases for LLM usage in SaaS projects:

- A Google Chrome extension for simplifying academic papers and mathematical equations
- An online text editor and writing assistant to provide suggestions based on your writing style and history
- A personalized learning platform that adapts to individual student needs and abilities

All of these ideas suddenly seemed achievable within a reasonable timeframe, without the need for a large team of
engineers.

## The Power of AI in SaaS

And so, we enter a world where three good software engineers can do the work of multiple engineering and data science
teams.

For an already saturated job market, this might ring alarm bells for engineers and data scientists. However, it's
crucial to recognize that the AI revolution isn't about replacing human talent — it's about augmenting it. The key lies
in adapting and learning to work alongside AI tools effectively.

To do so, get started by watching [3Blue1Brown's YouTube videos on LLMs](https://www.youtube.com/watch?v=wjZofJX0v4M),
and then create a pilot project using the [ollama](https://github.com/ollama/ollama) library
and its [python SDK]().

## Limitations

One thing to remember is that LLMs do occasionally have what is known in the AI jargon as _hallucinations_. This means,
if you are planning on using LLMs in a production environment, your product will on occasion provide false or inaccurate
information. For some, this is a small price to pay for a high degree of automation, for others, and more sensitive
production
systems such as in the financial industry, hallucinations are unacceptable.

A simple engineering strategy to solve this is to simply define the type of response you expect to receive from the LLM,
make sufficient calls to the LLM API until its response meets your criteria and accept the response.

## AI as a Competitive Edge

[Discuss how AI is becoming essential for staying competitive in the SaaS market]

(Sorry but) most business folks are still in the dark about the inner workings of LLMs. AI, especially LLMs, is the
glittery new toy in the tech playground. For the suits in tech companies, it's all about the pitch and sell — to
stakeholders, to intimidate competition, to motivate engineers. And sure, is it easier to peddle something that
sparkles. That's _probably_ why your Product Manager or Owner is so pushy about including AI in your dev team's product.

The recent announcement by Apple at WWDC about releasing a new Apple AI on iOS 18 devices further underscores the
growing importance of AI in the tech ecosystem. As major players invest heavily in AI, it's clear that this technology
will play a crucial role in shaping the future of SaaS.

## Embracing AI in Your SaaS Journey

The takeaway lesson is don't get left behind. If you still harbour a reluctance to leverage LLMs in your SaaS products,
then realize this reluctance stems from your own ego. If the technology is evolving at a rapid rate,
ensure you
evolve with it.

[//]: # (Remember, integrating AI into your SaaS isn't about replacing your skills or diminishing your achievements. It's about enhancing your capabilities and opening new avenues for innovation. By embracing AI, you're not just keeping up with the competition—you're positioning yourself at the forefront of the next wave of software development.)
