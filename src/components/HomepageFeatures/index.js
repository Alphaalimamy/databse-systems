import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
<<<<<<< HEAD
        This tutorial is  designed for Database Systems students to be a teach your tutorial
=======
        This tutorial is  designed from the ground up to be easily installed and
        used to get your website up and running quickly.
>>>>>>> 6b1ccb7 (Initial commit)
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
<<<<<<< HEAD
        The tutorial concentrates more on practical
=======
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
>>>>>>> 6b1ccb7 (Initial commit)
      </>
    ),
  },
  {
<<<<<<< HEAD
    title: 'Powered by Practical',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       The tutorial is made to be more practical. less theory
=======
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
>>>>>>> 6b1ccb7 (Initial commit)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
