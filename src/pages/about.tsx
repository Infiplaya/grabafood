const About = () => {
  return (
    <section id="about" className="mx-auto py-32 lg:max-w-7xl">
      <article className="prose prose-h2:text-4xl leading-10 p-10 text-2xl text-black">
        <h2 className="text-3xl">What&apos;s this?</h2>
        <p>
          Do you love to cook? Having trouble finding the right recipe for u?
          Let us help! Thanks to this website, and data from Spoonacular API,
          you are able to quickly find recipe that you are looking for!{" "}
          <br></br> Or if you do not know what you are looking for... <br></br>{" "}
          Try the random option!
        </p>
        <h2>Cool, how do I start?</h2>
        <p>Simply try searching!.</p>

        <h2>See more...</h2>
        <p>
          If you have any questions, check Contact. There should be ways to
          contact me or see my github for more projects.
        </p>
        <p>That&apos;s all! Have a good luck searching the right recipe!</p>
      </article>
    </section>
  );
};

export default About;
