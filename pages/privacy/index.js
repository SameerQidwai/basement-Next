import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const index = () => {
  return (
    <div className="pt-50 pb-25 bgc-white">
      <div className="txt-center">
        <Title level={1} className="service-title c-blackish ">
          Privacy Policy
        </Title>
      </div>
      <Row justify={'center'}>
        <Col xs={23} sm={20} md={15} lg={14}>
          <Title level={5}>
            SECTION 1: What do we do with your information?
          </Title>
          <Paragraph>
            <p>
              When you purchase something from our store, as part of the buying
              and selling process, we collect the personal information you give
              us such as your name, address and email address.
            </p>
            <p>
              When you browse our store, we also automatically receive your
              computer’s internet protocol (IP) address in order to provide us
              with information that helps us learn about your browser and
              operating system.
            </p>
            <p>
              Email marketing (if applicable): With your permission, we may send
              you emails about our store, new products and other updates.
            </p>
          </Paragraph>
        </Col>
        <Col xs={23} sm={20} md={15} lg={14}>
          <Title level={5}>SECTION 2: Consent</Title>
          <Paragraph>
            <p>Do you store cookies?</p>
            <p>
              By using our site, you accept the use of cookies with{' '}
              <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">aws.amazon.com</a> for us to
              provide a better and more personalized experience. By registering
              to our site, you will automatically be enrolled in our email
              marketing programs to be provided with the latest news, discounts,
              promotions and content. DigiCloud Hosting promises our users the
              ability to easily unsubscribe from our email marketing
              subscription through every email sent or getting in touch via the
              contact us form.
            </p>
            <p>How do you get my consent?</p>
            <p>
              When you provide us with personal information, place an order,
              arrange for a delivery or return a purchase, we imply that you
              consent to our collecting it and using it for that specific reason
              only.
            </p>
            <p>How do I withdraw my consent?</p>
            <p>
              If after you opt-in, you change your mind, you may withdraw your
              consent for us to contact you, for the continued collection, use
              or disclosure of your information, at anytime, by getting in touch
              via the contact us form.
            </p>
          </Paragraph>
        </Col>
        <Col xs={23} sm={20} md={15} lg={14}></Col>
        <Col xs={23} sm={20} md={15} lg={14}>
          <Title level={5}>SECTION 3: Third-Party Services</Title>
          <Paragraph>
            <p>
              In general, the third-party providers used by us will only
              collect, use and disclose your information to the extent necessary
              to allow them to perform the services they provide to us.
            </p>
            <p>
              However, certain third-party service providers, such as payment
              gateways and other payment transaction processors, have their own
              privacy policies in respect to the information we are required to
              provide to them for your purchase-related transactions. For these
              providers, we recommend that you read their privacy policies so
              you can understand the manner in which your personal information
              will be handled by these providers.
            </p>
            <p>
              In particular, remember that certain providers may be located in
              or have facilities that are located in a different jurisdiction
              than either you or us. So if you elect to proceed with a
              transaction that involves the services of a third-party service
              provider, then your information may become subject to the laws of
              the jurisdiction(s) in which that service provider or its
              facilities are located.
            </p>
            <p>
              Once you leave our store’s website or are redirected to a
              third-party website or application, you are no longer governed by
              this Privacy Policy or our website’s Terms of Service.
            </p>
            <p>Links</p>
            <p>
              When you click on links on our store, they may direct you away
              from our site. We are not responsible for the privacy practices of
              other sites and encourage you to read their privacy statements.
            </p>
          </Paragraph>
        </Col>
        <Col xs={23} sm={20} md={15} lg={14}>
          <Title level={5}>SECTION 4: Security</Title>
          <Paragraph>
            <p>
              To protect your personal information, we take reasonable
              precautions and follow industry best practices to make sure it is
              not inappropriately lost, misused, accessed, disclosed, altered or
              destroyed.
            </p>
            <p>
              If you provide us with your credit card information, the
              information is encrypted using secure socket layer technology
              (SSL) and stored with a AES-256 encryption. Although no method of
              transmission over the Internet or electronic storage is 100%
              secure, we follow all PCI-DSS requirements and implement
              additional generally accepted industry standards.
            </p>
          </Paragraph>
        </Col>
        <Col xs={23} sm={20} md={15} lg={14}>
          <Title level={5}>SECTION 5: Age of Consent</Title>
          <Paragraph>
            <p>
              By using this site, you represent that you are at least the age of
              majority in your state or proof of residence, or that you are the
              age of majority in your state or proof of residence and you have
              given us your consent to allow any of your minor dependents to use
              this site.
            </p>
          </Paragraph>
        </Col>
        <Col xs={23} sm={20} md={15} lg={14}>
          <Title level={5}>SECTION 6: Changes to this Privacy Policy</Title>
          <Paragraph>
            <p>
              If you would like to: access, correct, amend or delete any
              personal information we have about you, register a complaint, or
              simply want more information you’re welcome to get in touch via
              the contact us form.
            </p>
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default index;
