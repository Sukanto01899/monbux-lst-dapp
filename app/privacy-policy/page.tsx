import React from "react";
import { NextPage } from "next";

const PrivacyPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4 mt-16">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl mb-6 font-bold">PRIVACY POLICY</h1>
        <p>Page last updated: August 29th 2025</p>
        <p>monbux.xyz Privacy Notice</p>
        <h2>Introduction</h2>
        <p>
          This Privacy Notice (the “Privacy Notice”) explains how the personal data of individuals are handled - the
          “Data Subjects” or the “Data Subject”, or “you”, “your”, in connection with accessing and using the website,
          the Interface and any services available at magmastaking.xyz (together referred to as the “Services”). If you
          are interested in how cookies are used and how to change your cookies choice, please go to section “Cookies
          and Automatically Collected Data” Categories of Personal Data Collected, Purposes of and Bases for the
          Processing When providing the Services, certain personal data can be processed for the following purposes:
        </p>
        <table className="table-auto border-collapse border border-gray-300 w-full my-4">
          <thead className="bg-base-100">
            <tr>
              <th>Purpose of Processing</th>
              <th>Personal Data</th>
              <th>Legal Ground (basis)</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>Communicating with you regarding your inquiries, questions or support tickets </td>
              <td>
                Email address, subject of inquiry and its content, attachments and any other information you voluntarily
                provide{" "}
              </td>
              <td>Legitimate interests / contractual obligations</td>
            </tr>
            <tr>
              <td>Improving our Services and user experience</td>
              <td>Usage data, feedback, and any other information you provide related to your use of the Services</td>
              <td>Legitimate interests / contractual obligations</td>
            </tr>
            <tr>
              <td>Analyzing usage trends and preferences</td>
              <td>
                Usage data, device information, and any other information you provide related to your use of the
                Services
              </td>
              <td>Legitimate interests / contractual obligations</td>
            </tr>
            <tr>
              <td>Testing and improving our Services</td>
              <td>Usage data, feedback, and any other information you provide related to your use of the Services</td>
              <td>Legitimate interests / contractual obligations</td>
            </tr>
          </tbody>
        </table>
        <p>
          Your personal data are collected directly from you or from other parties you have authorized such collection.
          There is no process for special categories of personal data about you unless you voluntarily provide such
          data.
        </p>
        <h2>Cookies and Automatically Collected Data</h2>
        <p>
          As you navigate through and interact with website and the Services, you may be asked to consent to use
          cookies, which are small files placed on the hard drive of your computer or mobile device, and web beacons,
          which are small electronic files located on pages of the website, to collect certain information about your
          equipment, browsing actions, and patterns. The data is automatically collected from cookies and web beacons
          may include information from your web browser (such as browser type and browser language) and details of your
          visits to website, including traffic data, location data and logs, page views, length of visit and website
          navigation paths as well as information about your device and internet connection, including your IP address
          and how you interact with the Services. These data are collected this data in order to improve website and
          Services. The information is collected automatically and may also include statistical and performance
          information arising from your use of Services and website. This type of data will only be used in an
          aggregated and anonymized manner. You can disable/delete the cookies set by website — please find the
          appropriate instructions by following these links on how to implement the deletion in different browsers:
        </p>
        <ul>
          <li>For Google Chrome browser please refer here</li>
          <li>For Firefox browser please refer here</li>
          <li>For Safari browser please refer here</li>
          <li>For Microsoft Edge browser please refer here</li>
        </ul>

        <h2>Your Rights With Regard to the Personal Data Processing</h2>
        <p>
          In connection with the accessing, browsing of the website and using the Services, you shall be entitled to
          exercise certain rights laid down by the GDPR and outlined herein below, however exercise of some of those
          rights may not be possible in relation to the website and Services taking account of the Services&lsquo;
          nature, manner, form and other applicable circumstances. Right to Access: you may request all personal data
          via email. Right to Rectification: exercise of the given right directly depends on the data category
          concerned: if it concerns online identifiers, then their rectification isn&lsquo;t possible, but such
          categories of personal data as email address may be rectified by sending a request via e-mail. Right to
          Erasure (Right to be Forgotten): the personal data could be deleted by a request via e-mail. Consent
          Withdrawal Right: you shall be entitled to withdraw consent to the processing of the personal data to which
          you provided your consent. In particular, you can change your cookie choices by using cookie consent tool
          built in the website. You can exercise your right to withdraw consent by unsubscribing from email newsletter.
          Automated Decision-Making, Profiling: neither is being carried out, your consent will be sought before
          carrying out any such activities. You shall have the right to lodge a complaint with a competent data
          protection supervisory authority.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
