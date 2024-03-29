
# Clean Architecture in Node.js

[Click here for full blog post](https://mannhowie.com/clean-architecture-node)

Uncle Bob's famous [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) is a way to write resilient software.

Resilient software is divided into layers, underpinned by business logic and is independent of technologies. It should be:
1. **Independent of Frameworks**. Libraries and frameworks should be treated as tools and not dependencies.
2. **Testable**. Can be tested without external dependencies.
3. **Independent of UI**. You can easily switch CLI for Web or RasberryPi.
4. **Independent of Database**. Switch out SQL for MongoDB.
5. **Independent of any external agency**. Business rules don't know anything about outside world.

![The Clean Architecture diagram](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

In practice, choice of technology should be the last decision you make or code you write (e.g. database, platform, framework).

By following clean architecture, you can write software today that can be easily switched out for different technologies in the future.

