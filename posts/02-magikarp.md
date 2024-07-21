---
title: "From AI Skeptic to SaaS Success: The 11-Hour Magikarp Experiment That Changed Everything"
#title: "The Magikarp Lesson: Integrate AI in Your SaaS Product or Get Left Behind"
date: "2024-07-24"
description: "In just 11 hours, I created an AI agent that could do the work of an entire data science team; providing me with wake-up call for the future of software development."
image: "/images/articles/magikarp.WEBP"
artwork: "Pokémon Anime Series"
---

I used to think integrating Artificial Intelligence (AI) into my Software as a Service (SaaS) entrepreneurial projects
was cheating.
Then I built
Magikarp, an AI agent that turned my skepticism into a wake-up call for the future of software development.
In just 11 hours, I created an AI agent that could do the work of an entire data science team.

So, what is Magikarp?

Magikarp, named after the Pokémon that evolves from a weak fish into the powerful dragon called Gyarados, embodies the transformative
potential of AI. Like its namesake, this AI agent starts simple but can evolve into a robust, multi-functional
assistant — a metaphor for the rapid growth and untapped possibilities in AI technology.

<figure>
  <img src="https://patrickprunty.com/articles/gyarados.webp" alt="Gyarados: The evolved form of Magikarp, symbolizing the potential of our AI agent">
  <figcaption>Gyarados: The evolved form of Magikarp, symbolizing the potential of the Magikarp AI agent</figcaption>
</figure>

## An Unconventional Interview Experience

It began with an unconventional interview for a software developer position at a mobile device startup. Instead of facing a typical nonsensical coding challenge — like inverting a binary search tree while balancing on one foot —
 the company tasked me with a take-home project that addressed one of their
core strategic problems:

> Given user-provided data about a person (let's call him Dan), create personalized
> experiences and notifications for Dan via an intelligent agent named Magikarp. This agent resides on Dan's device and
> has contextual knowledge of his data stored locally on the device.

Dan's data was provided using a mixture of JSON and CSV files, including information about his personal details, daily
calendar,
music playlists, social media posts, fitness data, phonebook interactions and more.

Initially, I brainstormed ways to leverage clustering, recommendation, and machine learning algorithms to handle Dan's
personalized recommendations. I even created UML diagrams for data ingestion of different file types. I stared at my
increasingly complicated plans and thought, "hell, this is going to take me _weeks_ to complete."

Then I remembered...

The recruiter hinted in the initial screening how the company are exploring the integration of LLMs (Large Language
Models, e.g. ChatGPT) on their mobile devices.

This led me to pivot my approach entirely.

## Large Language Models in Motion

[todo: More specific details about the technology stack used to create Magikarp, such as the programming language, frameworks, or libraries employed.]

In simpler terms, LLMs are AI models that can understand and generate human-like text, making them powerful tools for
tasks like conversation, analysis, and personalized recommendation.

For the Magikarp project, I aimed to leverage the best free open-source LLM to achieve the following:

1. **Use of [Meta's Llama 3](https://llama.meta.com/llama3/)**: I chose Llama 3 over OpenAI's GPT APIs due to cost and
   the ability to run the model
   locally using the [ollama](https://github.com/ollama/ollama) library, which offers model configuration similar to
   OpenAI's "Create your own GPT."

2. **LLM Prompting:** Enable Dan to interact with Magikarp, with responses curated using Dan's contextual data.

3. **Smart Push-Notifications:** Simulate personalized, non-invasive push notifications on Dan's device for a given day.

4. **Rule-based User Configuration:** Allow Dan to set rules for Magikarp's interactions.

Watch the demo video
I [created here](https://drive.google.com/file/d/1AjILMCiRm8YwZPQLncvkX8y0AuZF2MpE/view?usp=sharing) to see Magikarp in
action. This demo showcases Magikarp's ability to understand context, provide personalized recommendations, and engage
in natural conversation with the user.

<iframe src="https://drive.google.com/file/d/1AjILMCiRm8YwZPQLncvkX8y0AuZF2MpE/preview" width="100%" height="400px" allow="autoplay"></iframe>

If you're short on time, here's an example conversation between Dan and Magikarp:

```text
>>> Hello there.
Hey! It's me, Magikarp! I've been keeping an eye on your recent activities and noticed you're quite the fitness enthusiast. With over 8,500 steps today, that's impressive! You must be feeling great after that 5K run. By the way, have you checked out Nicolas Jaar's new album? I heard it's a masterpiece!

What's on your mind today?

[Magikarp's response demonstrates contextual awareness and personalization]

>>> How many steps do I have left to do today in order to hit my steps goal?
According to your fitness data, you've already taken 8500 steps today. Your average daily step goal is 9000 steps. To calculate how many steps you need to take to reach your goal, let's subtract the steps you've already taken from your goal:

9000 (average daily step goal) - 8500 (steps taken so far) = 500

[Magikarp shows ability to perform simple calculations based on user data]

>>> Can you recommend me a couple of new songs I should listen to that I might like and haven't listened to already?
Hey there! As Magikarp, I've got my fins on your music taste. Based on your recent listening habits and favorite artists, I think you'd love these new tracks:\n\n1. **RÜFÜS DU SOL - No Place** (Indie Dance/Electronic) - Their atmospheric soundscapes and catchy melodies might remind you of Nicolas Jaar's style.\n2. **Glass Animals - Heat Waves** (Alternative Rock) - This song shares a similar blend of indie rock and electronic elements, which you seem to enjoy.\n\nGive them a spin and let me know what you think!

[Magikarp shows ability to perform entertainment recommendations based on user data]

>>> Can you be short and snappy in your responses when talking with me? 
Hey there! I'm Magikarp, here to help. Got it - short and snappy, got it!

[Magikarp response demonstrates ability to add rule-based configuration to future responses]

>>> So, what's my calendar looking like for today? 
According to your calendar, you have a busy day ahead of you. You've got three meetings scheduled: Team Meeting at 9:00 AM, Project Planning at 11:00 AM, and Client Call at 2:00 PM (which is actually 14:00). Make sure to review the project plan before the meeting at 11:00 AM!

[Magikarp shows ability to contextualize calendar for a given time and day]
```

The result is a highly sophisticated, albeit slow, Magikarp agent. Admittedly, the solution surprised
even
myself. Especially considering it took only ~ 11 hours (2-3 days) of development time to complete.

It was, in
fact, better than any sophisticated machine learning or statistical algorithm that would have taken me weeks to create.
This experience opened my eyes to the vast potential of AI integration, revealing a new landscape of possibilities for
aspiring entrepreneurs in the SaaS space.

## Transforming Skepticism into Innovation

Before this experience, I was skeptical about incorporating LLMs into my SaaS projects. My excuses ranged from: "they
might provide inaccurate information" to "they're too expensive." Moreover, using LLMs felt like sort of like
_cheating_. I prided myself on creating solutions from scratch, wanting full credit for my work rather than attributing
success to "the intelligent use of AI and LLMs."

However, completing the Magikarp project transformed my perspective. I now see a wide range of potential LLM
applications for SaaS projects, such as:

- A Google Chrome extension for simplifying academic papers and mathematical equations (using LLMs to translate complex
  language into simpler terms)
- An online text editor and writing assistant to provide suggestions based on your writing style and history (leveraging
  LLMs'
  understanding of context and style)
- A personalized learning platform that adapts to individual student needs and abilities (using LLMs to generate
  tailored content and explanations)

All of these ideas now seem both feasible and achievable to develop within a reasonable timeframe, without the need for
a large team of engineers.

## Leveraging AI as a Competitive Advantage

And so, we enter a world where three good software engineers can do the work of multiple engineering and data science
teams.

For an already saturated job market, this might ring alarm bells for engineers and data scientists. However, it's
crucial to recognize that the AI revolution isn't about replacing human talent — it's about augmenting it. The key lies
in adapting and learning to work alongside AI tools effectively.

You can get started by watching [3Blue1Brown's YouTube videos on LLMs](https://www.youtube.com/watch?v=wjZofJX0v4M),
and then create a pilot project using the [ollama](https://github.com/ollama/ollama) library
and its [Python SDK](https://github.com/ollama/ollama-python).

<iframe width="560" height="315" src="https://www.youtube.com/embed/wjZofJX0v4M?si=c3OFChEYttvj65Wt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Other useful resources:

- [Hugging Face Transformers](https://huggingface.co/): Offers pre-trained models and tools for NLP tasks like text
  generation and classification.
- [OpenAI API](https://openai.com/index/openai-api/): Provides paid access to GPT-3 and GPT-4 models' APIs for various
  applications; available
  on [Microsoft Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview).
- [Anthropic's Claude API](https://www.anthropic.com/api): Provides paid access to Claude Sonnet 3.5 model API designed
  mainly for applications in text-generation; available
  on [AWS Bedrock](https://docs.anthropic.com/en/api/claude-on-amazon-bedrock).

## The Future of AI-Powered SaaS

AI is becoming essential for staying competitive in the SaaS market. However, simply connecting your SaaS product to
some LLM's APIs does not make you an AI company.

Marcus Brownlee
recently [posted an interesting video on YouTube](https://www.youtube.com/watch?v=sDIi95CqTiM&pp=ygUbYnJvd25sZWUgcHJvZHVjdCB2cyBmZWF0dXJl)
discussing whether AI is a product in itself or merely a
feature.
This discussion comes in the wake of Apple's WWDC announcement about releasing a new Apple AI, powered by OpenAI's GPT
models, on iOS 18 devices later this year (2024).

<iframe src="https://www.youtube.com/embed/sDIi95CqTiM?si=dUospjSmpiJCFZVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

AI, especially LLMs, is the glittery new toy in the tech playground. For the suits in tech companies, it's all
about being able to pitch and sell — to
stakeholders, to intimidate competition, to motivate engineers. And sure, it's easier to sell something that
sparkles. That's _probably_ why your Product Manager or Owner is so pushy about including AI in your development team's
product.

In the wake of AI advancements, the next wave of innovation will bring an influx of new products, and the winners will
be those who leverage their AI and LLM features the best. To thrive, companies must not adopt AI technologies to simply
stay relevant, but align their business strategies to exploit AI’s full potential.

[//]: # (## Challenges in AI Integration)

[//]: # ()
[//]: # (While our Magikarp experiment showcases the incredible potential of AI in SaaS, it also highlights several important challenges we must address.)

[//]: # ()
[//]: # (First, there's the issue of privacy. Magikarp's effectiveness relies on access to personal data, which raises significant ethical questions. How do we ensure that AI assistants don't misuse or inappropriately share sensitive information? Balancing personalization and privacy is a delicate act that requires careful management.)

[//]: # ()
[//]: # (Next, we must acknowledge the current limitations of the technology. Despite its impressive capabilities, Magikarp isn't perfect. Its responses can sometimes be inconsistent or lack the nuance a human would provide. Future iterations will need to focus on improving context understanding, enhancing the accuracy of recommendations, and reducing the computational resources required to run the model locally.)

[//]: # ()
[//]: # (Finally, we face regulatory challenges. As AI agents like Magikarp become more prevalent, we're likely to see increased regulatory scrutiny. Questions about data ownership, AI decision-making transparency, and accountability for AI-generated actions will need to be addressed. Companies integrating such technologies must stay ahead of evolving regulations and ensure compliance with data protection laws like GDPR and CCPA.)

[//]: # ()
[//]: # (Addressing these challenges is crucial for the successful and responsible integration of AI in SaaS products. As we push the boundaries of what's possible with AI, we must remain mindful of the ethical, practical, and legal implications of our innovations.)

[//]: # ()
[//]: # (With careful consideration and ongoing improvements, we can develop AI assistants that respect privacy, provide genuine value, and comply with regulations. The potential is immense, but realizing it requires navigating these complex issues effectively.)

## Embracing AI in Your SaaS Journey

The takeaway lesson: don't get left behind. If you still hold a reluctance to leverage LLMs in your SaaS products,
then realize that your reluctance more than likely stems from your personal ego. As the technology continues to evolve
at a rapid
pace, ensure that you evolve with it. The next game-changing SaaS product could be just 11 hours of coding away.
