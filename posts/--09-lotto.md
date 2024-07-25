---
title: "Here's How Long it Took My Code to Win The Powerball Lotto"
date: "2024-08-06"
image: "/images/articles/lotto.png"
description: "Don't play the lotto."
artwork: "Brentley Frazer"
---

Feeling lucky? You'd better be if you play the lottery. The odds, to put it plainly, are not in your favour.

According to my ehm, \*fixes glasses\*, calculations, the probability of winning the Powerball jackpot — which means
matching 5 numbers plus the powerball from a selection of 69 numbers, is one in 292 million.

[equation here]

To put that in perspective, there's a higher chance that Margot Robbie will call over to your house in the next 5
minutes for
a game of Call of Duty (disclaimer: I don't have the calculations on hand for that one).

## Powerball Time (The Stupid Way)

Let's play us some lotto!

Well, actually, I don't want to pay to play the lotto...

Let's make our machine slave simulate playing the lotto instead (_hooray!_).

Let's start by playing how most people play: purchase a single ticket for 3 bucks, watch the draw on ___ night, check
the ticket to see if they match, repeat.

That means each time we play, we have a one in 292 million chance in winning. That's not great odds right? But my
machine is an addict, and knows
if she stops playing her numbers will come up, so she keeps playing.

Now, you might be thinking if you're a tech guy or gal, "this could take an _infinite_ time to run". And yes, you're
right,
it could. I wrote the code in C++ and used multithreading (8 threads) to speed it up. I got genuinely worried about
my machine, she got so hot. But she's an addict.

_"Please_ don't die on me sweaty." I whispered and it didn't.

But after _18_ hours, I pulled the plug. I couldn't stand seeing her that way.

Turns out the lotto is hard.

## Powerball Time (The Better Way, If You're Rich)

Let's shake things up a little.

In an imaginary world, where we have unlimited money, let's purchase an infinite number of lotto tickets until
we purchase the ticket whose numbers match the 6 winning numbers.

[//]: # ([//]: # &#40;This is akin to a traditional lotto syndicate, &#41;)

[//]: # (but now, my machine is a lone-wolf, and she doesn't like sharing.)

[//]: # (where the six winning lotto numbers are fixed. Let's play the lotto an infinite number of)

[//]: # (times until we match the winning tickets' numbers.)

The probability of winning the lotto is one in 292 million, we can do some quick-math to
determine that on average, we can expect to play 292 million times before we match the winning numbers.

[equation here]

But who knows, maybe the machine will get lucky, and we'll win with only couple hundred tickets bought and a lot of
profit
in the bank?

Let's set some ground rules: we'll only play the Powerball if the jackpot is $1bn, that way we have a considerable
jackpot
to offset the cost of the tickets bought.

Here are the results for 10 simulations, in ascending order from the smallest number of tickets bought to the largest:

simulation_id, winning_lotto_numbers, num_of_tickets_bought, probability_of_winning_at_time_of_winning, cost_per_ticket,
total_tickets_cost

1. [1,12,17,50,51,64], 272m, 0.99, $3, $992m

OK - so it looks like we got lucky!

We're onto something here ladies and gentlemen.

## Powerball Time (The Best Way)

Sometimes the jackpot reaches a limit and the Powerball and other national lotteries alike (cough, cough, The
Illuminati) 'guarantee' a
will-be-won draw (i.e if nobody matches the six numbers, the prize will be split amongst those who matched 5 numbers, or 4 numbers
and so on).

This is when you see stock market traders do a big syndicate and give the junior trader their credit cards to go down to
the local
convenient store to buy them $10,000 worth of lotto tickets.

So, how does that work?

Instead of buying an infinite number of lotto tickets ourselves, which in hindsight was pretty silly,
let's join forces and play together!

For the last record powerball jackpot, 9189382 numbers were bought, so we can simulate how many times on average we
would
expect to see 5 numbers be matches minus the number of tickets where we matched 5 numbers.

## Extra

Fun fact. In __- 2019, Ireland had its record jackpot for the national loterry, €18.96 million. My friend, who worked as a
trader at the time, participated in a syndicate. They purchased a considerable amount of tickets, and he confessed to me,
he fancied their chances.

He was understandably disappointed when the draw was made. Nobody won the jackpot, which is actually a good thing for
their syndicate strategy, however 149 players matched 5 numbers and won the second prize. To put that in perspective, an
average of 1.3 people win the Match 5 + Bonus prize in each Lotto draw - but this increased to _149_ ticket holders 
in the will-be-won draw.

<figure>
  <img src="https://patrickprunty.com/images/articles/draw.png" alt="PWA on Mobile Devices">
  <figcaption>PWA on Mobile Devices</figcaption>
</figure>




So, are you feeling lucky?


One of my friends was a trader and did a syndicate within his company. The jackpot was won by somebody else, he was
baffled as they had reduced their odds considerably given the number of tickets they had bought, turned out the winning
lotto ticket looked like this:

OK, entry fee is $10,000. If there's 100 of us in the company, then that's $1m, or 333,333 tickets we can buy.

Before, we said the probability of winning the lotto is one in 292 million. Now, it's one in 87,660 or 0.00114065%

Let's play

To test this out, I wrote some code to simulate playing the Powerball Lotto an infinite number of times until I won.
I ran this code 5 times, and here were the results, ordered in ascending order of ...

But what is the probability of winning the lotto?

To determine probability of winning the Powerball Lotto jackpot (matching all 5 white balls and the
Powerball), we calculate the total number of possible combinations and then determine the probability of your ticket
being the winning combination.

That is...

\[
C(n, k) = \frac{n!}{k!(n - k)!}
\]

where:

- \( n \) = 69 (total white balls)
- \( k \) = 5 (number of picks)

So, the formula becomes:

\[
C(69, 5) = \frac{69!}{5!(69 - 5)!}
\]

Stick that into a calculator and your odds of winning the lotto is 1 in 292 million.

But what if you buy 10, 100, or 1,000 tickets?

The probability of winning the lotto increases at a factor of how many times you play.

Therefore,

* 1 ticket = One in 292 million chance of winning
* 10 tickets = One in 29.2 million chance of winning
* 100 tickets = One in 2.92 million chance of winning
* 1,000 tickets = One in 292,000 chance of winning
* 10,000 tickets = One in 29,200 chance of winning
* 100,000 tickets = One in 29,

Therefore, we can create an equation to determine how many times we need to play the lotto in order to have the
same probability of winning the lotto as we do a 'fair game', such as a coin toss, which has 50/50 probability.

# Calculating the Number of Plays for a 50% Probability of Winning the Lottery

## Step 1: Probability of Not Winning with One Ticket

Let \( p \) be the probability of winning with one ticket. The probability of not winning with one ticket is:

\[
1 - p
\]

## Step 2: Probability of Not Winning with \( n \) Tickets

If you play \( n \) times, the probability of not winning in any of those plays is:

\[
(1 - p)^n
\]

## Step 3: Probability of Winning at Least Once with \( n \) Tickets

The probability of winning at least once after \( n \) plays is the complement of the probability of not winning at all:

\[
1 - (1 - p)^n
\]

## Step 4: Setting the Desired Probability

To find the number of tickets needed for a 50% chance of winning, set the above expression equal to 0.5:

\[
1 - (1 - p)^n = 0.5
\]

## Step 5: Solving for \( n \)

Isolate \( (1 - p)^n \) and solve for \( n \):

\[
(1 - p)^n = 0.5
\]

Taking the natural logarithm on both sides:

\[
\log((1 - p)^n) = \log(0.5)
\]

\[
n \log(1 - p) = \log(0.5)
\]

\[
n = \frac{\log(0.5)}{\log(1 - p)}
\]

Where:

- \( n \) is the number of plays needed
- \( p \) is the probability of winning with one ticket
- \( \log \) denotes the natural logarithm

Sticking this into a computer, we find that we need to buy 202,559 lotto tickets in order to have a 50% probability of
winning the powerball jackpot.

That is, we will need to spent 202,559 x $3 = $606,677 in order to have a 50% chance of winning.

Powerball's jackpots often sit at the $1bn mark, so maybe you think that's pretty fair odds in terms of doubling your
money.

he number of ways to choose 5 numbers out of 69 (white balls) without replacement is calculated using the combination
formula:

\[
C(n, k) = \frac{n!}{k!(n - k)!}
\]

where:

- \( n \) = 69 (total white balls)
- \( k \) = 5 (number of picks)

So, the formula becomes:

\[
C(69, 5) = \frac{69!}{5!(69 - 5)!}
\]

## Total Number of Combinations Including the Powerball

To win the jackpot, a player must also match the Powerball number. The Powerball is chosen from a separate pool of 26
numbers. Therefore, the total number of possible outcomes is the product of the combinations of the white balls and the
number of possible Powerball numbers:

\[
\text{Total Combinations} = C(69, 5) \times 26
\]

## Probability of Winning

The probability of winning the Powerball jackpot with a single ticket is the reciprocal of the total number of possible
combinations:

\[
\text{Probability} = \frac{1}{C(69, 5) \times 26}
\]

## Probability as a Percentage

To express the probability as a percentage, multiply the probability by 100:

\[
\text{Probability Percentage} = \left(\frac{1}{C(69, 5) \times 26}\right) \times 100
\]

Q. How dos lotto guarantee winner when jackpot is too big? - shared

https://chatgpt.com/c/e76b034d-3396-4ba7-aaa5-59c35906f54a

For as long as I can remember, I've always had a distaste for the lotto.

I worked in a petrol station during college and there, we had a machine which allowed people to purchase and
check their lotto tickets. The machine to check the lotto numbers was placed in alongside the cash register.
So whilst I don't play the lotto, in the five years I spent checking lotto tickets for customers, I estimate having
scanned between 30-50,000 lotto tickets, costing in total between €192,000-250,000.

The highest prized ticket I scanned?

_€4,500_.

It was a quick-pick played by a woman who worked in the local off-license. When I told her, she was ecstatic.
She started for the shop exit before taking back her ticket.

"_Hey_," I said. "You'll be needing this."

Fast-forward to today and as happy as that woman was, I can't help but feel she was a little hard done by the amount
of money she won.

I was studying mathematics whilst working there and whilst I had never done the math, I intuitively knew
it was a foolish game to play.

Now that I have some time and some computer skills behind me

It was the Irish Lotto, and she had got 4/6 numbers in a 'quick-pick', or 'jjj' in United States.

```cpp
#include <iostream>
#include <vector>
#include <tuple>
#include <random>
#include <algorithm>

using PowerballTicket = std::tuple<std::vector<int>, int>;
using WinningNumbers = PowerballTicket;

// Function to generate a Powerball ticket with 5 unique numbers and a Powerball number
PowerballTicket generate_ticket() {
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<int> number_dist(1, 69);
    std::uniform_int_distribution<int> powerball_dist(1, 26);
    
    std::vector<int> numbers;
    while (numbers.size() < 5) {
        int num = number_dist(gen);
        if (std::find(numbers.begin(), numbers.end(), num) == numbers.end()) {
            numbers.push_back(num);
        }
    }

    int powerball = powerball_dist(gen);
    return std::make_tuple(numbers, powerball);
}

// Function to check the ticket against the winning numbers and return a result
std::string check_winning(const PowerballTicket& ticket, const WinningNumbers& winning_numbers) {
    const auto& [ticket_numbers, ticket_powerball] = ticket;
    const auto& [winning_numbers_list, winning_powerball] = winning_numbers;

    std::vector<int> matched_numbers;
    for (const int& num : ticket_numbers) {
        if (std::find(winning_numbers_list.begin(), winning_numbers_list.end(), num) != winning_numbers_list.end()) {
            matched_numbers.push_back(num);
        }
    }

    bool powerball_matched = (ticket_powerball == winning_powerball);
    int matched_count = matched_numbers.size();

    if (matched_count == 5 && powerball_matched) {
        return "Jackpot!";
    } else if (matched_count == 5) {
        return "Second Prize!";
    } else if (matched_count == 4 && powerball_matched) {
        return "Third Prize!";
    } else if (matched_count == 4 || (matched_count == 3 && powerball_matched)) {
        return "Fourth Prize!";
    } else if (matched_count == 3 || (matched_count == 2 && powerball_matched)) {
        return "Fifth Prize!";
    } else if (matched_count == 1 && powerball_matched) {
        return "Sixth Prize!";
    } else if (powerball_matched) {
        return "Seventh Prize!";
    } else {
        return "No Prize.";
    }
}

// Function to simulate a Powerball draw and check a single ticket
void simulate_powerball() {
    PowerballTicket ticket = generate_ticket();
    WinningNumbers winning_numbers = generate_ticket(); // Normally, these would be actual drawn numbers

    // Display the ticket and winning numbers
    std::cout << "Your ticket numbers: ";
    for (int num : std::get<0>(ticket)) {
        std::cout << num << " ";
    }
    std::cout << "Powerball: " << std::get<1>(ticket) << std::endl;

    std::cout << "Winning numbers: ";
    for (int num : std::get<0>(winning_numbers)) {
        std::cout << num << " ";
    }
    std::cout << "Powerball: " << std::get<1>(winning_numbers) << std::endl;

    // Check and display the result
    std::string result = check_winning(ticket, winning_numbers);
    std::cout << "Result: " << result << std::endl;
}

int main() {
    simulate_powerball();
    return 0;
}
```

Simple combinatorics, we have the probability of you winning the lotto at...

The powerball on the other hand, which has 69 balls,

num_of_tickets_bought | cost_per_ticket | total_cost | winning_prob
1 | €5 | €5 | 0.0000
100 | €5 | 0.000001
1000
1000000

it's only worth your while playing and buying so many tickets if the jackpot is greater than ___

the idea is if you buy more tickets you have a higher chance of winning right? kind of like __ in charlie and
the chocolate factory.

syndicate:

num of people in syndicate | num of tickets bought per person | total_cost | winning_prob |
10 | 1 | €500 |
20 | 2 |
30 | 4 |

10,0000

the jackpots exceed $1bn and there's 380m people living in the USA. If a decentralized organizations asks every single
american to put $3.33 dollars into some website, and they do it, at midnight every night the country would have a new
billionaire.

But billionaires don't play the lotto, poor people do.