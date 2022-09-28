import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Better Angular Apps",
    Svg: require("@site/static/img/betterapps.svg").default,
    description: (
      <>
        We make sure that generated code is of the highest quality. We focus a
        lot on design and architectural patterns. We also put a lot of effort to
        make sure that your app is always working, no matter the configuration.
      </>
    ),
  },
  {
    title: "Faster Development",
    Svg: require("@site/static/img/faster.svg").default,
    description: (
      <>
        Coding apps in Angular can be challenging, there are so many things to
        learn in order to get started. Not anymore! We give you easy to use
        right click interface so you can focus on your app features and we make
        sure to generate the right code for you.
      </>
    ),
  },
  {
    title: "Extensible",
    Svg: require("@site/static/img/extensible.svg").default,
    description: (
      <>
        Extend or customize your workspace with defined coding standards and
        design system, you can make it simple or very advanced. There are no
        limits to your creativity, so use it to configure Lowgular the way you
        like!
      </>
    ),
  },
];

function tableHeader({ title }) {
  return <h2 className="table-header">Lowgular Benefits</h2>;
}

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.table}>
        <div>
          <table>
            <thead>
              <tr>
                <td></td>
                <th>Schematics CLI</th>
                <th>Schematics Extension</th>
                <th>Lowgular</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Automatic Module Generation</th>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Library Creation</th>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Define Where To Generate The Code</th>
                <td>❌</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>NX Support</th>
                <td>❌</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Customisable Code Generation</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Folder Structure Sync</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Inject</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Automatic Module Management</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Design System Support</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Connecting Component & Modules</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Inteligent Suggestions</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Architecture as a code</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Support For Injection Token</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>Advanced Routing</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
              <tr>
                <th>RxJS Support</th>
                <td>❌</td>
                <td>❌</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
