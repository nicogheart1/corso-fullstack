function Video({ video }) {
    return "ciao" , (
      <div>
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
      </div>
    );
  }

  console.log(Video());