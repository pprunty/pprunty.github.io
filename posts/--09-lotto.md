---
#title: "Beating the Lottery: A Machine's Perspective"
title: "Can My Machine Beat The Powerball Lottery?"
date: "2024-08-06"
image: "/images/articles/lotto2.png"
description: "Don't play the lotto."
artwork: "Brentley Frazer"
---

Are you feeling lucky? You'd better be if you play the lottery. The odds, to put it plainly, are not in your favour.

According to my ehm, \*fixes glasses\*, calculations, the probability of winning the Powerball jackpot — which means matching 5 numbers plus the Powerball from a selection of 69 numbers, is one in 292 million.

$$
P[X=\text{Winning the lotto}] = \frac{\text{Probability of owning one ticket}}{\text{Number of possible ticket combinations}} = \frac{1}{\binom{69}{5} \cdot 26} = \frac{1}{292,201,338}
$$

To put that in perspective, there's a higher chance that Margot Robbie will call over to your house in the next 5 minutes for a game of Call of Duty (disclaimer: I don't have the calculations on hand for that one).

## Powerball Time (The Stupid Way)

Let's play some lotto! Well, I don't want to _actually_ play to play the lotto. Let's make our machine slave simulate playing the lotto instead (_hooray!_).

We'll start by mimicking how most people play: purchase a single ticket for $3, watch the draw, check the ticket to see if it matches, and repeat.


That means each time we play, we have a one in 292 million chance of winning. Not great odds, right?

But my machine is an addict, and knows if she stops playing her numbers will come up, so she keeps playing.

Now, if you're a math or tech person you might be thinking if you're a tech guy or gal, "This could take an _infinite_ time to run". And yes, you're right, it could. 

For this reason, I wrote the code in C++ and used multithreading (8 threads) to speed it up. I got genuinely worried about my machine, she got so hot.

But she's an addict.

"_Please don't die on me sweaty,_" I whispered and it didn't.

But after _18_ hours and ___ lotto draws, I pulled the plug.

I couldn't stand seeing her that way.

Turns out the lotto is hard.

## Powerball Time (The Better Way, If You're Rich)

In an imaginary world where we have unlimited money, let's purchase an infinite number of lottery tickets until we buy the one with the winning numbers.

The probability of winning the lottery is one in 292 million, so we can expect to play / purchase 292 million tickets on average before we match the winning numbers.

$$
E[X=\text{Winning the lotto}] = \frac{1}{P[X=\text{Winning the lotto}]} = \frac{1}{\frac{1}{292,201,338}} = 292,201,338
$$


But who knows? Maybe the machine will get lucky, and we'll win with only a couple hundred tickets bought and a lot of profit in the bank?

Let's set some ground rules: we'll only play the Powerball if the jackpot is $1 billion, that way we have a considerable jackpot to offset the cost of the tickets bought.

Here are the results for 10 simulations, in ascending order from the smallest number of tickets bought to the largest:

simulation_id, winning_lotto_numbers, num_of_tickets_bought, probability_of_winning_at_time_of_winning, cost_per_ticket, total_tickets_cost
[1,12,17,50,51,64], 272m, 0.99, $3, $992m

OK, so it looks like we got lucky!

We're onto something here ladies and gentlemen.

You might be wondering how many tickets you have to buy to make

202,538,536 tickets

You might be wondering how many tickets you need to buy to make playing the lotto a 'fair game'. Meaning, you have a 50/50 chance of winning, the same as a coin toss.

## Powerball Time (The Best Way)

Sometimes the jackpot reaches a limit, and lotteries like Powerball 'guarantee' a will-be-won draw. This means if nobody matches all six numbers, the prize will be split amongst those who matched 5 numbers, 4 numbers, and so on.

This is when you see stock market traders organize big syndicates, sending junior traders to local convenience stores with credit cards to buy $10,000 worth of lottery tickets each.

Instead of buying an infinite number of lotto tickets ourselves, which in hindsight was pretty silly, let's join forces and play together!

For the last record powerball jackpot, 9189382 numbers were bought, so we can simulate how many times on average we would expect to see 5 numbers be matched minus the number of tickets where we matched 5 numbers.

## A Cautionary Tale

In 2019, Ireland had its record will-be-won jackpot for the national lottery, €18.96 million. My friend, who worked as a trader at the time, participated in a syndicate with his trading company. They purchased a considerable amount of tickets, and he confessed to me in private that as absurd as the plan seemed, he fancied their chances.

He was understandably disappointed when the draw was made. Nobody won the jackpot, which was good news for their syndicate strategy, however, 149 players matched 5 numbers and won the second prize. To put that in perspective, an average of 1.3 people match 5 numbers in each Lotto draw - but this increased to 149 ticket holders in the will-be-won draw.

This anomaly was attributed to a diagonal pattern on the lottery slips that many people, perhaps in a hurry, had filled out.

<figure>
  <img src="https://patrickprunty.com/images/articles/draw.png" alt="PWA on Mobile Devices">
  <figcaption>Diagonal numbers in blue: 2,9,16,23,30,37,44. The missing winning number in red: 40.</figcaption>
</figure>

crushing their chances of making any meaningful return

So are you feeling lucky?

Just remember that in the end, the house always wins.
