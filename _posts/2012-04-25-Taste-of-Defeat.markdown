---
layout: post
title: "The Taste of Defeat"
date: 2012/04/25
description: "As promised, this is the follow-up to talk about the Robotics competition I attended. If you missed last weeks post it explains the problem, which helps a bit, and is much more upbeat. I suggest reading it first. I wish I had a good story to tell you but I don't. So, I'll just show you what happened. Words can't really do justice to how disappointing this experience was, but if you look at our faces (I'm the one on the right) at about 1:26 you'll understand that it wasn't a good feeling."
sitemap_priority: 0.8
---

As promised, this is the follow-up to talk about the Robotics competition I attended. If you missed [last weeks post](/Adventures-in-Robotics/) it explains the problem, which helps a bit, and is much more upbeat. I suggest reading it first. I wish I had a good story to tell you but I don't. So, I'll just show you what happened. Words can't really do justice to how disappointing this experience was, but if you look at our faces (I'm the one on the right) at about 1:26 you'll understand that it wasn't a good feeling.

<div class="youtube">
    <iframe src="http://www.youtube.com/embed/3ZoqgPOKeTA?rel=0" frameborder="0" width="420" height="315"> </iframe>
</div>

In my mind, the time following the realization that our robot wasn't going to finish the maze (1:26) was extremely short. I remember immediately thinking _I need to get off the stage._ What clearly took us some time in the video happened in an instant in my mind. It's actually pretty painful to watch. We stood there, dumbfounded at our robot driving into a wall forever.

I'll stop dwelling.

The other thing you can take away from the agony of defeat apparent in our faces is that it occurred to us at the exact same time. The people in the room, the judges, none of them knew that something had gone wrong, except for us. In that moment we both knew. That's how close you become with your software as a developer. That's how close you become with your algorithms. There is no way you can't. If you spend hours upon hours (we put in about 60 this year) tweaking lines of code, scribbling out test cases, walking through scenarios on a whiteboard, and running your code over and over, you understand exactly what is happening every instant your program is running. All it took was the robot driving the wrong direction for a split second, and we knew the robot wouldn't solve this case. Not just that it wouldn't solve it this time, but that it would never solve it.

It's a sobering experience.

So what is the moral of the story? Test. Test a little bit, and then test a whole lot more. And not just the codebase in general, but the code you are implementing. We had run our robot hundreds of times pitting it against many many test cases. But we committed a cardinal sin. Even though we had a robot that we knew worked, we thought we could make it better, and we worked until the last possible moment to try. Don't ever spend the night before a release (or in this case a competition) making major changes to your source. It isn't worth it. We actually wrote a very elegant solution to faster paths back to home after finding the target. It was good code and we were proud of it. However, we neglected a specific set of cases that would have been easily avoidable, had we the time to test.

Lesson Learned

If you want to do some reading about more traditional testing I found a fairly gentle [introduction to unit testing](http://wiki.developerforce.com/page/How_to_Write_Good_Unit_Tests) at developer force. I know it's like your mom asking you to eat spinach, but trust me when I tell you that it's worth avoiding the stomach summersault of watching your code acting unexpectedly in production. The good news is that the winner of the competition was actually a really cool guy.  We chatted him up about all the things in his robot that made us jealous before hand, and explained some of the logic from ours that we were especially proud of. A video of his robot completing a different maze is below.

<div class="youtube">
<iframe src="http://www.youtube.com/embed/GMIREIwdniI?rel=0" frameborder="0" width="560" height="315"> </iframe>
</div>
