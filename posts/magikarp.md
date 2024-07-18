---
title: "Put AI in Your SaaS or Fall Behind: Here's Why"
date: "2024-07-18"
description: "My experience integrating LLMs into mobile devices for a startup, and why AI is becoming essential for SaaS competitiveness."
image: "/images/articles/magikarp.png"
#image: "/images/articles/ai-saas.png"
artwork: "Pokémon Crystal Gameplay"
---

Recently, I had an interview for a hardware electronics company and startup who specialise in manufacturing mobile
devices. The interview experience was a breath of fresh air, instead of being asked to invert a binary search tree live
on call, I was given a major problem the company are actively seeking to solve:

> Given user-provided data about a person (let's call him Dan), use Artificial Intelligence (AI) to create personalized
> experiences and notifications for Dan via an intelligent agent named Magikarp. This agent resides on Dan's device and
> has contextual knowledge of his data stored locally on the device.

The problem was admittedly much more open-ended than how I managed to capture it above, so I set a goal to leverage the intelligent use of LLMs
and achieve the following:

1. **General LLM Prompting:** Allow Dan to interact with Magikarp in a conversation (like we do today with any other LLM),
   except Magikarp can use Dan's contextual data to
   curate its response.
2. **Smart Push-Notifications:** Simulate smart and non-invasive push-notifications on Dan's device for a given day.
3. **Rule-based User Configuration:** Allow for Dan to create rules for the Magikarp agent, enabling Dan to suggest to
   the the agent _how_ and _when_ it should interact with
   him.

With the announcement of Apple AI in iOS 18.

I do not want to go into the low level details of how I solved this project, instead you can watch this demo video I 
created. The result was a highly sophisticated, albeit slow Magikarp agent which used a free open-sourced LLM called Llama 3.
The solution I created surprised even myself, especially considering it took me only ~ 11 hours (2-3 days) of development 
time to complete.

And so, we enter a world where three good engineers can do the work of three data science teams.

(Sorry but) most business folks are still in the dark about the inner workings of LLMs. AI, especially LLMs, is the
glittery new toy in the tech playground. For the suits in tech companies, it's all about the pitch and sell - to
stakeholders, to intimidate competition, to motivate engineers. And sure, is it easier to peddle something that
sparkles. That's _probably_ why your Product Manager or Owner is so pushy about including AI in your dev team's product.

Before this interview experience, I was reluctant to include LLMs in my SaaS startup ideas. My excuses ranged from _"
they might give the wrong information"_ to _"they're too expensive."_ Plus, using them felt like cheating. I wanted to
be responsible for the brilliance of my work, not chalk it down to "with the intelligent use of AI and LLMs..."

But this project, dubbed Magikarp (hence the article image), opened my eyes to the practical applications and potential
of AI in software development. It challenged me to think beyond traditional coding problems and consider how AI can
enhance user experiences in meaningful ways.

This experience taught me that integrating AI into your SaaS isn't about offloading responsibility or cheating your way
to success. It's about leveraging powerful tools to create more personalized, efficient, and intelligent solutions for
your users.
