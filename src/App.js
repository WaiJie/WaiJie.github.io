import React, { useEffect, useState } from "react";
import "./App.css";

const monthMap = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

function parseDate(dateStr) {
  const [month, year] = dateStr.split(" ");
  return new Date(parseInt(year), monthMap[month] - 1);
}

function App() {
  const [posts, setPosts] = useState([]);
  const [showAbout, setShowAbout] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    fetch("./content/posts.json")
      .then((response) => response.json())
      .then((data) => {
        const postsPromises = data.map((post) => {
          return fetch(`./content/${post.id}/post.md`)
            .then((response) => response.text())
            .then((text) => {
              const paragraphs = text
                .split("\n")
                .filter((line) => line.trim().length > 0);
              const firstParagraph = paragraphs[0];
              const fullContent = paragraphs.slice(1).join("\n");
              return {
                id: post.id,
                title: post.title,
                date: post.date,
                content: firstParagraph,
                fullContent: fullContent,
                showFullContent: false,
                tags: post.tags || [],
              };
            })
            .then((postData) => {
              const imagePath = `./content/${post.id}/cover.jpg`;
              return fetch(imagePath)
                .then((response) => {
                  if (response.ok) {
                    return { ...postData, image: imagePath };
                  }
                  throw new Error("Image not found");
                })
                .catch(() => ({ ...postData, image: null }));
            });
        });

        Promise.all(postsPromises).then((posts) => {
          setPosts(posts);
        });
      })
      .catch((error) => console.error("Error fetching posts:", error));

    fetch("./content/about.md")
      .then((response) => response.text())
      .then((text) => {
        setAboutContent(text);
      })
      .catch((error) =>
        console.error("Error fetching About Me content:", error)
      );
  }, []);

  const toggleFullContent = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, showFullContent: !post.showFullContent }
          : post
      )
    );
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const renderMarkdownContent = (content, postId) => {
    return content.split("\n").map((line, index) => {
      const imageRegex = /!\[.*?\]\((.*?)\)/;
      const iframeRegex = /<iframe.*?src="(.*?)".*?><\/iframe>/;
      const customLinkRegex = /\[link:(.*?)\]\((.*?)\)/;
  
      const imageMatch = line.match(imageRegex);
      const iframeMatch = line.match(iframeRegex);
      const customLinkMatch = line.match(customLinkRegex);
  
      if (imageMatch) {
        const imageUrl = imageMatch[1];
        const fullImageUrl = `./content/${postId}/${imageUrl}`;
        return (
          <img
            key={index}
            src={fullImageUrl}
            alt="Markdown"
            className="markdown-image"
          />
        );
      } else if (iframeMatch) {
        const iframeSrc = iframeMatch[1];
        const fullIframeSrc = iframeSrc.startsWith("http")
          ? iframeSrc
          : `./content/${postId}/${iframeSrc}`;
  
        const widthMatch = line.match(/width="(\d+)"/);
        const heightMatch = line.match(/height="(\d+)"/);
  
        const width = widthMatch ? widthMatch[1] : "100%";
        const height = heightMatch ? heightMatch[1] : "400";
  
        return (
          <div className="iframe-container">
            <iframe
              key={index}
              src={fullIframeSrc}
              title="Embedded content"
              className="markdown-iframe"
              width={width}
              height={height}
            />
          </div>
        );
      } else if (customLinkMatch) {
        const linkText = customLinkMatch[1];
        const linkUrl = customLinkMatch[2];
        return (
          <a key={index} href={linkUrl} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        );
      } else if (line.startsWith("# ")) {
        return <h1 key={index}>{line.slice(2)}</h1>;
      } else if (line.startsWith("## ")) {
        return <h2 key={index}>{line.slice(3)}</h2>;
      } else if (line.startsWith("### ")) {
        return <h3 key={index}>{line.slice(4)}</h3>;
      } else if (line.startsWith("#### ")) {
        return <h4 key={index}>{line.slice(5)}</h4>;
      } else if (line.startsWith("##### ")) {
        return <h5 key={index}>{line.slice(6)}</h5>;
      } else if (line.startsWith("###### ")) {
        return <h6 key={index}>{line.slice(7)}</h6>;
      } else {
        return <p key={index}>{line}</p>;
      }
    });
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const filteredPosts =
    selectedTag === "ALL"
      ? posts
      : selectedTag
      ? posts.filter((post) => post.tags.includes(selectedTag))
      : posts;

  const allTags = [...new Set(posts.flatMap((post) => post.tags))];
  const sortedTags = [
    "ALL",
    ...allTags.filter((tag) => tag !== "Featured").sort(),
  ];

  const sortedPosts = filteredPosts.sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );
  const featuredPosts = sortedPosts.filter((post) =>
    post.tags.includes("Featured")
  );
  const otherPosts = sortedPosts.filter(
    (post) => !post.tags.includes("Featured")
  );

  const renderPosts = (posts) => {
    return posts.map((post, index) => (
      <div key={post.id} className="post">
        <div className="post-content">
          <div className="post-date">{post.date}</div>
          <div className="post-image-container">
            {post.image && (
              <img src={post.image} alt={post.title} className="post-image" />
            )}
          </div>
          <div className="post-text">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.fullContent && (
              <button onClick={() => toggleFullContent(post.id)}>
                {post.showFullContent ? "Read Less" : "Read More"}
              </button>
            )}
            <div className="post-tags">
              {post.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {post.showFullContent && (
          <div className="full-content">
            {renderMarkdownContent(post.fullContent, post.id)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-section">
          <h1>Hello, I am Wai Jie</h1>
          <p>
            I am a Data Analyst with a passion for working with data to derive
            insights and solutions.
          </p>
          <p>
            Check out some of my past analytics or automation projects below!
          </p>
          <div className="social-buttons">
            <a href="#" onClick={toggleAbout} className="social-button">
              <span className="about-icon">🙋‍♂️</span>
              {showAbout ? "Hide About" : "About Me"}
            </a>
            <a href="mailto:waijiechua@gmail.com" className="social-button">
              <span className="email-icon">📧</span>
              Email Me
            </a>
            <a
              href="https://sg.jobstreet.com/profile/waijie-chua-tNGHnx2dKL"
              className="social-button" target="_blank"
            >
              <img
                src="content\jobstreet-icon.jpg"
                alt="JobStreet-icon"
                className="social-icon"
              />
              JobStreet Profile (Full CV)
            </a>
          </div>
        </div>
        {showAbout && (
          <div className="full-content">
            {renderMarkdownContent(aboutContent, "about")}
          </div>
        )}

        <h2 className="featured-projects">Featured Projects</h2>
        <div className="tag-filter">
          <p className="filter-label">Filter by Tag:</p>
          {sortedTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(tag)}
              className={`tag-button ${tag === selectedTag ? "active" : ""}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="post-container">{renderPosts(featuredPosts)}</div>
        {otherPosts.length > 0 && (
          <div>
            <h2 className="other-projects">Other Projects</h2>
            <div className="other-post-container">
              {renderPosts(otherPosts)}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
