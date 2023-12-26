---
author: paczkow
pubDatetime: 2023-12-25
title: "Obsidian 101: Software Developer Edition"
postSlug: obsidian-101
description: Software Developers have to be faced with a lot of information every day. From technical meetings to domain knowledge. It can be overwhelming unless you use the proper tools.
featured: true
tags:
  - knowledge-management
  - obsidian
---

# Obsidian 101: Software Developer Edition

In the world of software development, managing a large amount of information is critical. [Obsidian](https://obsidian.md/) is a powerful note-taking and knowledge-management tool. It is gaining popularity for its flexibility and robust features.

This article is a guide for software developers. It explores Obsidian's basic tools and how to integrate them into daily workflows.

## Knowledge Management is Graph Problem

As I mentioned in the [previous article](https://paczkow.dev/posts/write-to-future-self/) knowledge management is a graph problem.

Most people fail to create a note system because they're based on a hierarchical structure, such as folders. From a long-term perspective, it causes creating an archive - a place where we put notes in strict places. We need to rely on our memory to find pieces of information.

It’s a fragile system 🥚.

Much better is when we have many ways to reach the note based on related contexts. We can reach the note by analyzing connections which is a more robust way.

## 🧰 Toolbox - links, tags + properties, folders, templates

### Links

A basic way to connect two notes. It’s a 1:1 connection. I use this tool when I directly connect two concepts.

It's simple but powerful. In days, weeks and months you can reach the note by these related contexts.

How can I use it?

Whenever I create a new note think about concepts related to the new one. Search them in my System. If I see any connection I put it into the new note using `[[]]`.

### Tags / Properties

As I said in the previous article, notes are objects. We create them by externalizing our thoughts. Because they are objects, they can have properties and we can group notes by them to ease filter out.

Depending on the property type I use `Tag` or `Property` (in-build feature in Obsidian).

Tags I used for based, common properties like:

- Type
- Status
- Keywords
- Source (if I create notes from external material like book, video, podcast)

I don't want too many tags to overwhelm me and I don't want to manage them. Try to keep a simple and flat structure as possible. It allows me to filter out specific notes quickly.

![How to filter out notes using tags](@assets/images/obsidian-101/01.png)

I use Properties for anything else, like:

- Creation Date
- Modification Date
- Description
- People (for meeting note)

Like tags I can use properties to filter out notes. It can be useful when I’d like to check notes between certain dates.

![Use properties to find notes between dates](@assets/images/obsidian-101/02.png)

### Folders

I use folders only for three reasons.

I need to keep backward compatibility with computer systems and tools. This is important when I use bash scripts or Github on my knowledge system.
Separate different high-level contexts of notes like Calendar, Utilities, and Templates.
When I create a project and after finishing it I’d like to remove all related stuff. Then I put all the notes inside this project.

### Template

Obsidian allows us to create Templates of Notes and thanks to that we can reuse the structure of the notes. The perfect example of DRY.

Even though the app has an in-built plugin, I recommend [Templater](https://github.com/SilentVoid13/Templater) plugin. It enhances the possibility of templates and saves even more time.

## Practice Time

As a software developer, I have to manage the knowledge that comes out of meetings. The topics range from technical discussions with developers to business meetings with domain experts.

Besides the important point of a knowledge system is gathering insights about technical decisions I made in the past. This will help me make better decisions and create better solutions in the future.

### Use Case #1 - Meetings

For meetings I use the template below.

As you can see I use only one tag #meeting and bunch of properties describing the meeting itself. This structure allows me to reach information from the meeting in the future without remember exact place of note. [(Remember to create notes for your future self!)](https://paczkow.dev/posts/write-to-future-self/)

I can do it by visiting the meeting tag.
I can filter out by date, project, or check by related context like participants of the meeting.
I’m fan of 60 Second Summary, that’s method enforce on me focus as at end of the meeting I need write the main points.

```markdown
---
tags: #meeting
date:
project:
people:
---

# <% tp.file.title %>

## Main Points / Question

What do I want to focus on meeting? Do I have any important points issue worth mentioning?

## 60 second summary

What are the main points/assumptions from the meeting? What is important to me?
```

### Use Case #2 - Software Engineer’s Journal

One of the best tools to improve yourself in any area is journaling. I applied it also for Software World. When I encounter an interesting or challenging problem, I try to describe it in my journal.

The same with architectural decisions.

I describe when and why I made a decision, and what be potential consequences and benefits are. After some time I back to them and compare if the expectations match reality.

This practice helps me generate a lot of insight. I look at different design patterns. I also examine architectural decisions and areas where I should improve myself.

From the “technical” POV I added in mark paragraph in my daily note as `#architecture` and/or `#to-verify`. For daily notes I use a great [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) plugin.

### Use Case #3 - Efficient Learning

When it comes to learning methods, I've come a long way. I used to consume everything without too much retention. Now, I learn more strategically. I use methods like **Spaced Repetition** and the **Feynman Technique**. This keeps retention at a high level.

Use a combination of Matter → Obsidian → Anki.

It gives me the possibility to gather information from many sources. Then, I process the information into pieces I can understand and put it into Anki. Thanks to that I remember almost everything I learned. No more feeling of wasting time.

## Obsidian - best friend of knowledge worker

It doesn’t matter if you’re a software developer, doctor, or teacher. Nowadays, knowledge workers need to handle a lot of information.

Thanks to Obsidian, you can create a system. This system allows you to find the correct information at the correct time. It saved me a lot of time and frustration and it's just beginning...😉
