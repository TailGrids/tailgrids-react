import React from "react";
import Accordion from "./Accordion";
import FaqHeader from "./FaqHeader";
import Faq from "./index";

const Preview = () => {
  return (
    <>
      <section className="container mt-28">
        <FaqHeader
          subtitle="FAQ"
          title="Any Questions? Look Here"
          description=" There are many variations of passages of Lorem Ipsum available but
          the majority have suffered alteration in some form."
        ></FaqHeader>
        <Faq>
          <Accordion
            title="How Long we deliver your first blog post?"
            description="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
          />
          <Accordion
            title="How Long we deliver your first blog post?"
            description="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
          />
          <Accordion
            title="How Long we deliver your first blog post?"
            description="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
          />
          <Accordion
            title="How Long we deliver your first blog post?"
            description="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
          />
        </Faq>
      </section>
    </>
  );
};

export default Preview;
