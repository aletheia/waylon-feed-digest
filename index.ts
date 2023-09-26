import { task } from "@ampt/sdk";

const feedUrl = 'https://aws.amazon.com/it/blogs/machine-learning/feed/';

const feedFetchTask = task("my task", async () => {
  console.log(`Fetching feed ${feedUrl}`);
});

feedFetchTask.run();
