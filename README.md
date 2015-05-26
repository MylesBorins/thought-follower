#Thought Follower

This is a thought experiment.

## Input

Put in someones twitter handle.

## Output

Thought Leader || Thought Follower

## Algorithm

This algorithm is stupid on built on top of the notion that klout actually means anything.

Compare your klout score to the klout score of you friends and followers.

ThoughtLeader = klout(user) * i + averageKlout(followers) * (1 - i) > averageKlout(friends)

##TODO

    *   Get all followers for a twitter handle
    *   cache klout sores
    *   build corpus on bootstrap to avoid rate limiting
    
## Some jank
I didn't quite feel like implemented logic to get the bearer token and cache it. Please feel free to PR. For now you can put your consumer key and secret in local.json and run the get token script. Take the result and put it in the conf.