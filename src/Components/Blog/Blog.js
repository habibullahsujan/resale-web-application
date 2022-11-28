import React from "react";

const Blog = () => {
  return (
    <section
      //   x-data="
      //    {
      //    openFaq1: false,
      //    openFaq2: false,
      //    openFaq3: false,
      //    openFaq4: false,
      //    openFaq5: false,
      //    openFaq6: false
      //    }
      //    "
      className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Any Questions? Look Here
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
              <button
                className="faq-btn flex w-full text-left"
                // @click="openFaq1 = !openFaq1"
              >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-semibold text-black">
                    What are the different ways to manage a state in a React
                    application?
                  </h4>
                </div>
              </button>
              <div x-show="openFaq1" className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  There are four main types of state you need to properly manage
                  in your React apps:
                  <span>
                    URL We can use URL to store some data e.g. The id of the
                    current item, being viewed Filter parameters Pagination
                    offset and limit Sorting data Keeping such data in the URL
                    allows users to share deep links with others. It is
                    recommended to avoid storing such information in the app's
                    state to avoid the URL in our app getting out of sync. The
                    URL should be used as the system of record, Read from it as
                    needed for information related to sorting, pagination, etc.
                    Update the URL as required when the settings change React
                    Router is a great tool to handle routes and manage the
                    params.
                  </span>
                  <span>
                    Web Storage The second option is to store the state in the
                    browser via web storage. This is useful when we want to
                    persist state between reloads and reboots. Examples include
                    cookies, local storage, and IndexedDB. These are native
                    browser technologies. Data persisted in the browser is tied
                    to a single browser. So, if the user loads the site in a
                    different browser, the data will not be available. We avoid
                    storing sensitive data in the browser since the user may
                    access the app on a shared machine. Some examples of where
                    web storage might be most useful include storing a user's
                    shopping cart, saving partially completed form data or
                    storing JWT token in HttpOnly Cookie.
                  </span>
                  <span>
                    Local State The third option is to use store state locally.
                    It is useful when one component needs the state
                  </span>
                  <span>
                    Lifted State The Fourth option is to define the state in the
                    parent component. Often, the same state is used across
                    multiple components. In those cases, it is useful to lift
                    the state to a common parent. The lifting state is a
                    two-step process. First, we declare the state in a common
                    parent component, and then we pass the state down to child
                    components via props. This pattern should be considered any
                    time a few related components need to use the same state.
                    The lifting state avoids duplicating states in multiple
                    components. It helps to assure that our components all
                    consistently reflect the same state.
                  </span>
                  <span>
                    Derived State The fifth option is to compute the new state
                    based on the available state and we do not need to declare a
                    state at all. If there are existing values that can be
                    composed to give us the information we need, then we can
                    calculate that information on each render instead of storing
                    it. Some examples include calling .length on an array to
                    determine the number of records instead of storing a
                    separate numItems variable in the state or deriving an
                    errorsExist boolean by checking if the errors array is
                    empty. So, why bother deriving the state? Well, deriving the
                    state avoids our state values getting out of sync. It
                    simplifies our code since we do not have to remember to keep
                    separate values in sync. When we update the state, derived
                    values are automatically recalculated in the render.
                  </span>
                </p>
              </div>
            </div>
            <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
              <button
                className="faq-btn flex w-full text-left"
                // @click="openFaq2 = !openFaq2"
              >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-semibold text-black">
                    What is a unit test? Why should we write unit tests?
                  </h4>
                </div>
              </button>
              <div x-show="openFaq2" className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  What is Unit Testing? Unit testing is a type of software
                  testing where individual units or software components are
                  tested. Its purpose is to validate that each unit of code
                  performs as expected. A unit can be anything you want it to be
                  — a line of code, a method, or a class. Generally, smaller
                  tests are better as they give a more granular view of your
                  code’s performance. Also, when you test very small units, your
                  tests can run fast, like a thousand tests in a second fast.
                  There are two types of unit testing: Manual: As the name
                  implies, unit tests are run manually to verify the correctness
                  of your code. This is done before writing automated tests. Its
                  drawback is that you have to manually test your
                  functions/classes whenever you make changes to them.
                  Automated: This is the preferred unit testing method as it can
                  be carried out by simply running a script. Automated tests
                  also make it easier to run tests when your application scales.
                  Why Do We Need Unit Testing? To justify any effort in
                  business, there must be a positive impact on the bottom line.
                  Here are a few benefits to writing unit tests: Unit tests save
                  time and money. Usually, we tend to test the happy path more
                  than the unhappy path. If you release such an app without
                  thorough testing, you would have to keep fixing issues raised
                  by your potential users. The time to fix these issues could’ve
                  been used to build new features or optimize the existing
                  system. Bear in mind that fixing bugs without running tests
                  could also introduce new bugs into the system. Well-written
                  unit tests act as documentation for your code. Any developer
                  can quickly look at your tests and know the purpose of your
                  functions. It simplifies the debugging process. Unit testing
                  is an integral part of extreme programming. Extreme
                  programming is basically a
                  “test-everything-that-can-possibly-break” programming
                  strategy. Unit tests make code reuse easier. If you want to
                  reuse existing code in a new project, you can simply migrate
                  both the code and tests to your new project, then run your
                  tests to make sure you have the desired results. Unit testing
                  improves code coverage. A debatable topic is to have 100% code
                  coverage across your application. In the testing pyramid, unit
                  tests are faster than integration and end-to-end. They are
                  more assertive and return quick feedback.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
              <button
                className="faq-btn flex w-full text-left"
                // @click="openFaq4 = !openFaq4"
              >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-semibold text-black">
                    How does prototypical inheritance work?
                  </h4>
                </div>
              </button>
              <div x-show="openFaq4" className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  Everything in Javascript is an object. Even when creating a
                  Class is an Object via an Object Literal or Constructor
                  Function. This is how Javascript does class-based programming
                  as to other traditional Object-Oriented Programming languages
                  where they use the keyword 'class' and 'inheritance'. So, the
                  core idea of Prototypal Inheritance is that an object can
                  point to another object and inherit all its properties. The
                  main purpose is to allow multiple instances of an object to
                  share common properties, hence, the Singleton Pattern.
                </p>
              </div>
            </div>
            <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
              <button
                className="faq-btn flex w-full text-left"
                // @click="openFaq5 = !openFaq5"
              >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-lg font-semibold text-black">
                    React vs. Angular vs. Vue?
                  </h4>
                </div>
              </button>
              <div x-show="openFaq5" className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  React Or React Built By Facebook React.js or simply React are
                  the different names of this framework. It is basically a
                  JavaScript-based framework launched in 2013 by Jordan Walke.
                  It is an open-source framework that allows you to create
                  interactive UI and the front-end of the app. To begin with
                  this framework, all you need is to hire a web developer.
                  Despite being a young library of JavaScript, React has
                  maintained its position by offering outstanding features and
                  functions. Apart, the industry's leading brands including
                  Uber, Netflix, PayPal, Walmart have shown trust in React. Over
                  the last few years, React is fastly growing as it uses a
                  Virtual DOM that makes it easier to compare previous HTML code
                  differences and only loads the different parts. Also, it gives
                  you all the tools that help you define what to render and in
                  which circumstances. This will improve the app load time and
                  ensure excellent app performance. Besides here are the few
                  advantages and downsides of React. Pros of Using React For An
                  App Development Project Ensuring faster loading; The
                  separation of data and presentation is possible with React;
                  Being based on JavaScript, it is simplers to begin; Single
                  file contains both markup and logic (JSX). Downsides of Using
                  React It is just a JavaScript library, not a complete
                  framework; Implementing MVC architecture is not possible with
                  React; Insufficient to build web app without the support of
                  other libraries. Angular Built by Google Undoubtedly, Angular
                  is the biggest framework among these three options. In fact,
                  it is being called at times a Platform rather than a
                  framework. However, the unmatched features of React have
                  surpassed Angular. Angular was developed by Google in 2009 as
                  an open-source dynamic web app framework by Misko Hevery and
                  Adam Abrons. After that, Angular offers out-of-the-box support
                  for many things, therefore allowing developers to have full
                  control on UI, reaction to User input, validating the input in
                  forms, routing and state management sending AJAX HTTP requests
                  and more. With a wide choice of in-build features, Angular
                  allows you to build, manage and test your app much more
                  efficiently. In addition, it is a widely popular framework for
                  front-end development, therefore giant organizations such as
                  Google, Forbes, Whatsapp and other 500 companies have shown
                  interest in this framework. Apart, here are the pros and cons
                  of using Angular for the app development project. Benefits of
                  Using Angular Ensuring excellent app performance; Providing
                  offline support and PWA capabilities for the app development;
                  Ideal option for creating large scale applications as it
                  provides in-build features; Projects developed with Angular
                  are expandable, scalable, and developed more quickly; It
                  embraces the Angular-CLI command-line tool; Angular provides a
                  basic framework for developing web apps and managing it
                  without any support of other libraries. Ensure end-to-end
                  testing. Vue.js is A Community-Driven Framework Vue.js is a
                  most-discussed and rapidly growing JavaScript-based framework
                  that is initiated by Google's Ex-employee Evan You. It is a
                  framework that sits somewhere between React and Angular. A web
                  app development company can explain you its features . But
                  before you you make any decision, keep in mind that Vue is not
                  as big as Angular it includes such features that make it
                  competitive to React and Angular. Vue.js is a progressive
                  framework that allows you to create progressive single-page
                  apps. Like Angular and React, Vue is also all about developing
                  User Interfaces by combining reusable components. But beyond
                  that, Vue gives you more of React and less of Angular which is
                  why it is surpassing Angular. Above all, here are the few pros
                  and cons of Vue.js for your knowledge: Pros of Vue.js For
                  Project Development Vue comes up with in-detail documentation.
                  Reusable components of this framework make the development
                  process much faster and easier. There is a possibility of
                  Component-based Architecture (CBA). It provides flexibility
                  and simplicity for app development. Vue provides a list of
                  tools and libraries such as official CLI, Development tools,
                  Vue Router, State Management, and more. Cons of Using Vue for
                  App Development Community support is not as wide as Angular
                  and React Limited number of plugin availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Blog;
