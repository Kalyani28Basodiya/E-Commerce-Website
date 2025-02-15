import styled from "styled-components";

const Contact = () => {
  return <>
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.8615174977988!2d76.91567618081028!3d22.58846923503618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d1760eccf4055%3A0x9df3979bb273825f!2z4KS24KS_4KS1IOCkruCkguCkpuCkv-CksCDgpLDgpL7gpKfgpL4g4KSV4KWD4KS34KWN4KSjIOCkleCkvuCksuCli-CkqOClgCDgpJbgpL7gpKTgpYfgpJfgpL7gpIHgpLU!5e1!3m2!1sen!2sin!4v1727374125077!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form ">
          <form action="" method="POST" className="contact-inputs">

            <input type="text" placeholder="username" name="username" autoComplete="off" required />
            <input type="email" placeholder="Email" name="Email" autoComplete="off" required />
            <textarea placeholder="Enter your text" name="Massage" id="" autoCapitalize="off" required></textarea>
            <input type="submit" value='send' />

          </form>
        </div>
      </div>
    </Wrapper></>;
};

const Wrapper = styled.section`
  /* height: 180vh; */
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


export default Contact;
