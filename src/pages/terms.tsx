import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import Logo from '@/components/Logo';

export default function Terms() {
  return (
    <div className='landing-page bg-background'>
      <div
        className={clsxm('fixed', 'w-full', 'z-20')}
        style={{
          background: `rgba(41, 40, 51, 0.8)`,
          backdropFilter: `blur(20px)`,
          WebkitBackdropFilter: `blur(20px)`,
        }}
      >
        <div
          className={clsxm(
            'flex',
            'items-center',
            'justify-between',
            'max-w-[1728px]',
            'mx-auto',
            'py-8',
            'px-4',
            'md:px-8',
            'lg:px-16',
            'w-full'
          )}
        >
          <Logo />
        </div>
      </div>
      <CenteredContent className='px-5 pt-52 pb-6'>
        <div className='mx-auto max-w-4xl space-y-8 text-white/80'>
          <div>
            <p className='text-center'>
              <strong>Terms of Service</strong>
            </p>
            <p className='text-center'>
              <strong>Last Updated: July 25, 2022</strong>
            </p>
          </div>
          <p>
            Please read these Terms of Service (the &ldquo;
            <strong>
              <em>Terms</em>
            </strong>
            &rdquo;) carefully because they govern your use of the website
            located at{' '}
            <a
              href='http://www.solanapay.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='underline'>www.realms.today</span>
            </a>{' '}
            (the &ldquo;
            <strong>
              <em>Site</em>
            </strong>
            &rdquo;). The Site, made available by Solana Technology Services LLC
            (the &ldquo;
            <strong>
              <em>Site Operator</em>
            </strong>
            &rdquo;, &ldquo;
            <strong>
              <em>we</em>
            </strong>
            &rdquo;, &ldquo;
            <strong>
              <em>us</em>
            </strong>
            &rdquo;), acts as an information hub for and a front-end to the
            decentralized SPL Governance protocol and for the Realms Open Source
            Code. This Site is one, but not the exclusive, means of accessing
            the SPL Governance Protocol. To make these Terms easier to read, the
            Site and our services are collectively called the &ldquo;
            <strong>
              <em>Interface</em>
            </strong>
            .&rdquo;
          </p>
          <p>
            <strong>
              NOTICE ON PROHIBITED USE &ndash; RESTRICTED PERSONS:{' '}
            </strong>
            THE INTERFACE AND ANY RELATED SERVICES ARE NOT OFFERED TO AND MAY
            NOT BE USED BY:
          </p>
          <p>
            PERSONS OR ENTITIES WHO RESIDE IN, ARE CITIZENS OF, ARE LOCATED IN,
            ARE INCORPORATED IN, OR HAVE A REGISTERED OFFICE IN ANY RESTRICTED
            TERRITORY, AS DEFINED BELOW (EACH SUCH PERSON OR ENTITY FROM A
            RESTRICTED TERRITORY, A &ldquo;
            <strong>
              <em>RESTRICTED PERSON</em>
            </strong>
            &rdquo;).
          </p>
          <p>
            WE DO NOT MAKE EXCEPTIONS. THEREFORE, IF YOU ARE A RESTRICTED
            PERSON, THEN DO NOT ATTEMPT TO USE THE INTERFACE OR ANY RELATED
            SERVICES. USE OF A VIRTUAL PRIVATE NETWORK (&ldquo;
            <strong>
              <em>VPN</em>
            </strong>
            &rdquo;) OR ANY OTHER SIMILAR MEANS INTENDED TO CIRCUMVENT THE
            RESTRICTIONS SET FORTH HEREIN IS PROHIBITED.
          </p>
          <p>
            <strong>
              WHEN YOU AGREE TO THESE TERMS, YOU ARE AGREEING (WITH LIMITED
              EXCEPTION) TO RESOLVE ANY DISPUTE BETWEEN YOU AND{' '}
            </strong>
            <strong>THE SITE OPERATOR</strong>
            <strong>
              {' '}
              THROUGH BINDING, INDIVIDUAL ARBITRATION RATHER THAN IN COURT.
              PLEASE REVIEW CAREFULLY SECTIONS 16 &ldquo;DISPUTE
              RESOLUTION&rdquo; BELOW FOR DETAILS REGARDING ARBITRATION.
            </strong>
            <strong>
              HOWEVER, IF YOU ARE A RESIDENT OF A JURISDICTION WHERE APPLICABLE
              LAW PROHIBITS ARBITRATION OF DISPUTES, THE AGREEMENT TO ARBITRATE
              IN SECTION 16 WILL NOT APPLY TO YOU BUT THE PROVISIONS OF SECTION
              15 (GOVERNING LAW) WILL APPLY INSTEAD.
            </strong>
          </p>
          <ol className='list-decimal space-y-8'>
            <li>
              <strong>Agreement to Terms.</strong>&ensp;By using our Interface,
              you (&ldquo;
              <strong>
                <em>you</em>
              </strong>
              &rdquo;) agree to be bound by these Terms. If you don&rsquo;t
              agree to be bound by these Terms, then you must not use the
              Interface or access the Site. Notwithstanding the foregoing, the
              laws of some jurisdictions may limit or not permit certain
              provisions of this agreement, such as indemnification, the
              exclusion of certain warranties or the limitation of liability. In
              such a case, such provisions will apply only to the maximum extent
              permitted by the laws of such jurisdictions. Also, you may have
              additional legal rights in your jurisdiction, and nothing in these
              terms will prejudice such rights that you may have as a consumer
              of the Interface under such applicable law.
            </li>
            <li>
              <strong>Privacy Policy.</strong>&ensp;Please review our Privacy
              Policy, which also governs your use of the Interface, for
              information on how we collect, use and share your information.
            </li>
            <li>
              <strong>Changes to these Terms or the Interface.</strong>&ensp;We
              may update the Terms from time to time in our sole discretion. If
              we do, we&rsquo;ll let you know by posting the updated Terms on
              the Site and/or may also send other communications. It&rsquo;s
              important that you review the Terms whenever we update them or you
              use the Interface. If you continue to use the Interface after we
              have posted updated Terms, it means that you accept and agree to
              the changes. If you don&rsquo;t agree to be bound by the changes,
              you may not use the Interface anymore. Because our Interface are
              evolving over time we may change or discontinue all or any part of
              the Interface, at any time and without notice, at our sole
              discretion.
            </li>
            <li>
              <strong>Who May Use the Interface?</strong>&ensp;You may use the
              Interface only if you are at least 18 years of age (or such other
              minimum age at which you can provide consent to data processing
              under the laws of your territory), and not otherwise barred from
              using the Interface under applicable law. In order to protect the
              integrity of the Interface, we reserve the right, at any time, in
              our sole discretion, to block access to the Interface from certain
              IP addresses and unique device identifiers. For the purposes of
              the Terms, &ldquo;
              <strong>
                <em>Restricted Territory</em>
              </strong>
              &rdquo; means of Algeria, Bangladesh, Bolivia, Belarus, Burundi,
              Burma (Myanmar), Cote D&apos;Ivoire (Ivory Coast), Crimea and
              Sevastopol, Cuba, Democratic Republic of Congo, Ecuador, Iran,
              Iraq, Liberia, Libya, Mali, Morocco, Nepal, North Korea, Somalia,
              Sudan, Syria, Venezuela, Yemen, Zimbabwe or any other country to
              which Canada, Panama, the United States, the United Kingdom or the
              European Union embargoes goods or imposes similar sanctions.
            </li>
            <li>
              <strong>About the Interface.</strong>
              <ol className='list-[lower-alpha] space-y-8 pl-4 pt-4'>
                <li>
                  <span className='underline'>
                    Access to the SPL Governance Protocol.
                  </span>
                  &nbsp;The Interface provides you with one access point to the
                  SPL Governance Protocol. The SPL Governance Protocol is
                  software source code licensed to the public under the Apache
                  2.0 license. The SPL Governance Protocol is made available at
                  https://github.com/solana-labs/solana-program-library/tree/master/governance
                  and offers the ability for a user to create and manage
                  decentralized autonomous organizations (each, a &ldquo;
                  <strong>
                    <em>DAO</em>
                  </strong>
                  &rdquo;). Through a compatible third-party Solana wallet
                  application or device, any user may record the results of the
                  SPL Governance Protocol in accordance with the user&rsquo;s
                  instructions, thus effectuating token transactions on the
                  Solana blockchain.
                </li>
                <li>
                  <span className='underline'>
                    Access to the Realms Open Source Code.
                  </span>
                  &nbsp;The Interface also provides you with one access point to
                  the Realms Open Source Code.{' '}
                  <span className='underline'>The Realms Open Source Code</span>{' '}
                  is software source code licensed to the public under the
                  Apache 2.0 license. The Realms Open Source Code is made
                  available at{' '}
                  <a
                    href='https://github.com/solana-labs/governance-ui'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='text-blue-400 underline'>
                      https://github.com/solana-labs/governance-ui
                    </span>
                  </a>{' '}
                  and offers the ability for a user to interact with the SPL
                  Governance Protocol, amongst other things. Through a
                  compatible third-party Solana wallet application or device,
                  any user may record the results of the Realms Open Source Code
                  in accordance with the user&rsquo;s instructions, thus
                  effectuating token transactions on the Solana blockchain.
                </li>
                <li>
                  <span className='underline'>Our Relationship.</span>&nbsp; You
                  acknowledge and agree that the Site Operator is an online
                  platform provider and that the Site Operator does not direct
                  or control any of the DAOs managed on the Interface.
                </li>
                <li>
                  <span className='underline'>
                    Communication from the Interface.
                  </span>
                  &nbsp; If you are a member of DAO managed through the
                  Interface, you may elect to receive emails, text messages or
                  other communications through third-party services made
                  available through the Interface in connection with the posting
                  of proposals or other updates for such DAO. If you elect to
                  receive communications in connection with a DAO, you agree and
                  acknowledge that the Site Operator will not be responsible or
                  liable to you for any loss and takes no responsibility for and
                  will not be liable to you for in the case of failure of such
                  communication.
                </li>
                <li>
                  <span className='underline'>Submitting a Proposal.</span>
                  &nbsp;Using the Interface, you may submit a DAO proposal using
                  a service that enables the conversion of natural language to
                  executable code (the &ldquo;
                  <strong>
                    <em>Proposal Converter</em>
                  </strong>
                  &rdquo;). You agree and acknowledge that any such DAO proposal
                  submitted using the Proposal Converter is a set of executable
                  code instructions that you have reviewed.
                </li>
                <li>
                  <span className='underline'>Disputes Between Users.</span>
                  &nbsp;The Site Operator is not a party to any relationship
                  between any users, including any DAO, on the Interface. In the
                  event that you have a dispute with any user of the Interface,
                  you agree to address such dispute directly with such user. If
                  permitted in your jurisdiction, you release the Site Operator
                  (and the Site Operator&rsquo;s officers, directors, agents,
                  investors, subsidiaries, and employees) (collectively &ldquo;
                  <strong>Releasees</strong>&rdquo;) from, and covenant not to
                  sue Releasees for any and all claims, demands, or damages
                  (actual or consequential) of any kind and nature, known and
                  unknown, suspected and unsuspected, disclosed and undisclosed,
                  arising out of or in any way connected with such dispute.
                </li>
                <li>
                  <span className='underline'>
                    Regulatory and Compliance Suspensions or Terminations.
                  </span>
                  &nbsp;We may suspend or terminate your access to the Interface
                  at any time in connection with any transaction as required by
                  applicable law, any governmental authority, or if we in our
                  sole and reasonable discretion determine you are violating
                  these Terms or the terms of any third-party service
                  provider.&nbsp; Such suspension or termination shall not be
                  constituted a breach of these Terms by the Site Operator. In
                  accordance with its anti-money laundering, anti-terrorism,
                  anti-fraud, and other compliance policies and practices, we
                  may impose reasonable limitations and controls on the ability
                  of you or any beneficiary to utilize the Interface.
                </li>
              </ol>
            </li>
            <li>
              <strong>Your Content.</strong>
              <ol className='list-[lower-alpha] space-y-8 pl-4 pt-4'>
                <li>
                  <span className='underline'>Posting Content.</span>&nbsp;Our
                  Interface may allow you to store or share content such as text
                  (in posts or communications with others), files, documents,
                  graphics, images, music, software, audio and video. Anything
                  (other than Feedback) that you post or otherwise make
                  available through the Interface is referred to as &ldquo;
                  <strong>
                    <em>User Content</em>
                  </strong>
                  &rdquo;. The Site Operator does not claim any ownership rights
                  in any User Content and nothing in these Terms will be deemed
                  to restrict any rights that you may have to your User Content.
                </li>
                <li>
                  <span className='underline'>
                    Permissions to Your User Content.
                  </span>
                  &nbsp;By making any User Content available through the
                  Interface you hereby grant to the Site Operator a
                  non-exclusive, transferable, worldwide, royalty-free license,
                  with the right to sublicense, to use, copy, modify, create
                  derivative works based upon, distribute, publicly display, and
                  publicly perform your User Content in connection with
                  operating and providing the Interface.
                </li>
                <li>
                  <span className='underline'>
                    Your Responsibility for User Content.
                  </span>
                  &nbsp;You are solely responsible for all your User Content.
                  You represent and warrant that you have (and will have) all
                  rights that are necessary to grant us the license rights in
                  your User Content under these Terms. You represent and warrant
                  that neither your User Content, nor your use and provision of
                  your User Content to be made available through the Interface,
                  nor any use of your User Content by the Site Operator on or
                  through the Interface will infringe, misappropriate or violate
                  a third party&rsquo;s intellectual property rights, or rights
                  of publicity or privacy, or result in the violation of any
                  applicable law or regulation.
                </li>
                <li>
                  <span className='underline'>
                    The Site Operator&rsquo;s Intellectual Property.
                  </span>
                  &nbsp;We may make available through the Interface content that
                  is subject to intellectual property rights. We retain all
                  rights to that content.
                </li>
                <li>
                  <span className='underline'>Feedback.</span>&nbsp;We
                  appreciate feedback, comments, ideas, proposals and
                  suggestions for improvements to the Interface (&ldquo;
                  <strong>
                    <em>Feedback</em>
                  </strong>
                  &rdquo;). If you choose to submit Feedback, you agree that we
                  are free to use it (and permit others to use it) without any
                  restriction or compensation to you.
                </li>
              </ol>
            </li>
            <li>
              <div>
                <strong>
                  General Prohibitions and the Site Operator&rsquo;s Enforcement
                  Rights. You agree not to do any of the following:
                </strong>
                <ol className='list-[lower-alpha] space-y-8 pl-4 pt-4'>
                  <li>
                    Post, upload, publish, submit or transmit any User Content
                    that: (i)&nbsp;infringes, misappropriates or violates a
                    third party&rsquo;s patent, copyright, trademark, trade
                    secret, moral rights or other intellectual property rights,
                    or rights of publicity or privacy; (ii)&nbsp;violates, or
                    encourages any conduct that would violate, any applicable
                    law or regulation or would give rise to civil liability;
                    (iii)&nbsp;is fraudulent, false, misleading or deceptive;
                    (iv) is defamatory, obscene, pornographic, vulgar or
                    offensive; (v)&nbsp;promotes discrimination, bigotry,
                    racism, hatred, harassment or harm against any individual or
                    group; (vi)&nbsp;is violent or threatening or promotes
                    violence or actions that are threatening to any person or
                    entity; or (vii)&nbsp;promotes illegal or harmful activities
                    or substances;
                  </li>
                  <li>
                    Use, display, mirror or frame the Interface or any
                    individual element within the Interface, The Site
                    Operator&rsquo;s name, any Site Operator trademark, logo or
                    other proprietary information, or the layout and design of
                    any page or form contained on a page, without the Site
                    Operator&rsquo;s express written consent;&nbsp;
                  </li>
                  <li>
                    Access, tamper with, or use non-public areas of the
                    Interface, Site Operator&rsquo;s computer systems, or the
                    technical delivery systems of Site Operator&rsquo;s
                    providers;&nbsp;
                  </li>
                  <li>
                    Attempt to probe, scan or test the vulnerability of any Site
                    Operator system or network or breach any security or
                    authentication measures;&nbsp;
                  </li>
                  <li>
                    Avoid, bypass, remove, deactivate, impair, descramble or
                    otherwise circumvent any technological measure implemented
                    by the Site Operator or any of the Site Operator&rsquo;s
                    providers or any other third party (including another user)
                    to protect the Interface;&nbsp;
                  </li>
                  <li>
                    Attempt to access or search the Interface or download
                    content from the Interface using any engine, software, tool,
                    agent, device or mechanism (including spiders, robots,
                    crawlers, data mining tools or the like) other than the
                    software and/or search agents provided by the Site Operator
                    or other generally available third-party web browsers;&nbsp;
                  </li>
                  <li>
                    Send any unsolicited or unauthorized advertising,
                    promotional materials, email, junk mail, spam, chain letters
                    or other form of solicitation;&nbsp;
                  </li>
                  <li>
                    Use any meta tags or other hidden text or metadata utilizing
                    Site Operator trademark, logo URL or product name without
                    the Site Operator&rsquo;s express written consent;&nbsp;
                  </li>
                  <li>
                    Use the Interface, or any portion thereof, for any
                    commercial purpose or for the benefit of any third party or
                    in any manner not permitted by these Terms;&nbsp;
                  </li>
                  <li>
                    Forge any TCP/IP packet header or any part of the header
                    information in any email or newsgroup posting, or in any way
                    use the Interface to send altered, deceptive or false
                    source-identifying information;&nbsp;
                  </li>
                  <li>
                    Attempt to decipher, decompile, disassemble or reverse
                    engineer any of the software used to provide the
                    Interface;&nbsp;
                  </li>
                  <li>
                    Interfere with, or attempt to interfere with, the access of
                    any user, host or network, including, without limitation,
                    sending a virus, overloading, flooding, spamming, or
                    mail-bombing the Interface;&nbsp;
                  </li>
                  <li>
                    Collect or store any personally identifiable information
                    from the Interface from other users of the Interface without
                    their express permission;&nbsp;
                  </li>
                  <li>
                    Impersonate or misrepresent your affiliation with any person
                    or entity;&nbsp;
                  </li>
                  <li>
                    Violate any applicable law, rule, or regulation concerning
                    the integrity of trading markets, including (but not limited
                    to) the manipulative tactics commonly known as spoofing and
                    wash trading;
                  </li>
                  <li>Violate any applicable law or regulation; or</li>
                  <li>
                    Encourage or enable any other individual to do any of the
                    foregoing.
                  </li>
                </ol>
                <p className='mt-4'>
                  &emsp;The Site Operator is not obligated to monitor access to
                  or use of the Interface or to review or edit any content.
                  However, we have the right to do so for the purpose of
                  operating the Interface, to ensure compliance with these Terms
                  and to comply with applicable law or other legal requirements.
                  We reserve the right, but are not obligated, to remove or
                  disable access to any content, including User Content, at any
                  time and without notice, including, but not limited to, if we,
                  at our sole discretion, consider it objectionable or in
                  violation of these Terms.&nbsp; We have the right to
                  investigate violations of these Terms or conduct that affects
                  the Interface. We may also consult and cooperate with law
                  enforcement authorities to prosecute users who violate the
                  law.
                </p>
              </div>
            </li>
            <li>
              <strong>No Fiduciary Duties.</strong>&ensp;The Interface are not
              intended to, and do not, create or impose any fiduciary duties on
              the Site Operator. To the fullest extent permitted by law, any
              user of the Interface acknowledges and agrees that the Site
              Operator owes no fiduciary duties or liabilities it or any other
              party, and that to the extent any such duties or liabilities may
              exist at law or in equity, those duties and liabilities are hereby
              irrevocably disclaimed, waived, and eliminated. Any user of the
              Interface further agrees that the only duties and obligations that
              the Site Operator may owe are those set out expressly herein.
            </li>
            <li>
              <strong>Copyright Policy.</strong>&ensp;The Site Operator respects
              copyright law and expects its users to do the same. It is the Site
              Operator&rsquo;s policy to terminate access to users who
              repeatedly infringe or are believed to be repeatedly infringing
              the rights of copyright holders.
            </li>
            <li>
              <strong>Links to Third Party Websites or Resources.</strong>
              &ensp;The Interface may allow you to access third-party website or
              other resources. We provide access only as a convenience and are
              not responsible for the content, products or services on or
              available from those resources or links displayed on such website.
              You acknowledge sole responsibility for and assume all risk
              arising from, your use of any third-party resources.
            </li>
            <li>
              <strong>Termination.</strong>&ensp;We may suspend or terminate
              your access to and use of the Interface, including suspending
              access to the Interface, at our sole discretion, at any time and
              without notice to you. Upon any termination, discontinuation or
              cancellation of the Interface or your account, the following
              Sections will survive: 5(c)(i), 5(c)(ii) (only for payments due
              and owing to the Site Operator prior to the termination), 6(b),
              6(c), 6(e), 7, 11, 12, 13, 14, 15, 16, and 17.
            </li>
            <li>
              <div className='space-y-8'>
                <p>
                  <strong>Warranty Disclaimers.</strong>&ensp;THE INTERFACE,
                  INCLUDING THE PROPOSAL CONVERTER, IS PROVIDED &ldquo;AS
                  IS,&rdquo; WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE
                  FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
                  ENJOYMENT AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT
                  OF COURSE OF DEALING OR USAGE OF TRADE. WE MAKE NO WARRANTY
                  THAT THE INTERFACE WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE
                  ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. WE MAKE NO
                  WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS,
                  TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY INFORMATION
                  OR CONTENT ON THE INTERFACE.
                </p>
                <p>
                  &emsp;THE SITE OPERATOR WILL NOT BE RESPONSIBLE OR LIABLE TO
                  YOU FOR ANY LOSS AND TAKES NO RESPONSIBILITY FOR, AND WILL NOT
                  BE LIABLE TO YOU FOR, ANY USE OF THE INTERFACE, INCLUDING BUT
                  NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (I)
                  USER ERROR SUCH AS FORGOTTEN PASSWORDS, INCORRECTLY
                  CONSTRUCTED TRANSACTIONS, OR MISTYPED WALLET ADDRESSES; (II)
                  SERVER FAILURE OR DATA LOSS; (III) CRYPTOCURRENCY WALLETS OR
                  CORRUPT FILES; (IV) UNAUTHORIZED ACCESS TO INTERFACE; (V)
                  ERRORS IN THE PROPOSAL CONVERTER, OR (VI) ANY THIRD PARTY
                  ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES,
                  PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST ANY
                  BLOCKCHAIN NETWORK UNDERLYING THE INTERFACE.
                </p>
                <p>
                  &emsp;TOKENS, INCLUDING ANY GOVERNANCE TOKENS TRANSACTED IN
                  CONNECTION WITH THE INTERFACE, ARE INTANGIBLE DIGITAL ASSETS.
                  THEY EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED
                  IN THE APPLICABLE BLOCKCHAIN NETWORK. ANY TRANSFER OF TITLE
                  THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL ASSET OCCURS ON THE
                  DISTRIBUTED LEDGER WITHIN SUCH BLOCKCHAIN NETWORK, WHICH THE
                  SITE OPERATOR DOES NOT CONTROL. THE SITE OPERATOR DOES NOT
                  GUARANTEE THAT IMPOSTORS CAN EFFECT THE TRANSFER OF TITLE OR
                  RIGHT IN ANY TOKENS. YOU BEAR FULL RESPONSIBILITY FOR
                  VERIFYING THE IDENTITY, LEGITIMACY, AND AUTHENTICITY OF ASSETS
                  PURCHASES THROUGH THE INTERFACE. NOTWITHSTANDING INDICATORS
                  AND MESSAGES THAT SUGGEST VERIFICATION, IMPOSTORS MAKES NO
                  CLAIMS ABOUT THE IDENTITY, LEGITIMACY, OR AUTHENTICITY OF
                  ASSETS ON THE INTERFACE OR ANY PURPORTED SUBSEQUENT
                  TRANSACTIONS.
                </p>
                <p>
                  &emsp;By accessing and using the Interface, you represent that
                  you understand the inherent risks associated with using
                  cryptographic and blockchain-based systems, and that you have
                  a working knowledge of the usage and intricacies of digital
                  assets such as bitcoin (BTC), ether (ETH), SOL, and other
                  digital tokens such as those following the SPL standard. You
                  further understand that the markets for these digital assets
                  are highly volatile due to factors including (but not limited
                  to) adoption, speculation, technology, security, and
                  regulation. You acknowledge that the cost and speed of
                  transacting with cryptographic and blockchain-based systems
                  are variable and may increase at any time. You further
                  acknowledge the risk that your digital assets may lose some or
                  all of their value while they are supplied to or from the
                  Interface. You further acknowledge that we are not responsible
                  for any of these variables or risks and cannot be held liable
                  for any resulting losses that you experience while accessing
                  Interface. Accordingly, you understand and agree to assume
                  full responsibility for all of the risks of accessing and
                  using and interacting with the Interface.
                </p>
              </div>
            </li>
            <li>
              <strong>Indemnity.</strong>&ensp;You will indemnify and hold the
              Site Operator and its officers, directors, employees and agents,
              harmless from and against any claims, disputes, demands,
              liabilities, damages, losses, and costs and expenses, including,
              without limitation, reasonable legal and accounting fees arising
              out of or in any way connected with (a) your access to or use of
              the Interface, (b) your User Content, or (c) your violation of
              these Terms.
            </li>
            <li>
              <strong>Limitation of Liability.</strong>
              <ol className='list-[lower-alpha] space-y-8 pl-4 pt-4'>
                <li>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER THE SITE
                  OPERATOR NOR ITS SERVICE PROVIDERS INVOLVED IN CREATING,
                  PRODUCING, OR DELIVERING THE INTERFACE WILL BE LIABLE FOR ANY
                  INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, OR
                  DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST SAVINGS, LOST
                  BUSINESS OPPORTUNITY, LOSS OF DATA OR GOODWILL, SERVICE
                  INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF
                  SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF OR IN
                  CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO
                  USE THE INTERFACE, WHETHER BASED ON WARRANTY, CONTRACT, TORT
                  (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL
                  THEORY, AND WHETHER OR NOT THE SITE OPERATOR OR ITS SERVICE
                  PROVIDERS HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE,
                  EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE
                  FAILED OF ITS ESSENTIAL PURPOSE.
                </li>
                <li>
                  TO THE MAXIMUM EXTENT PERMITTED BY THE LAW OF THE APPLICABLE
                  JURISDICTION, IN NO EVENT WILL THE SITE OPERATOR&rsquo;S TOTAL
                  LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR
                  FROM THE USE OF OR INABILITY TO USE THE INTERFACE EXCEED THE
                  AMOUNTS YOU HAVE PAID OR ARE PAYABLE BY YOU TO THE SITE
                  OPERATOR FOR USE OF THE INTERFACE OR ONE HUNDRED DOLLARS
                  ($100), IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO THE
                  SITE OPERATOR, AS APPLICABLE.
                </li>
                <li>
                  THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE
                  FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN THE
                  SITE OPERATOR AND YOU.
                </li>
              </ol>
            </li>
            <li>
              <strong>Governing Law and Forum Choice.</strong>&ensp;These Terms
              and any action related thereto will be governed by the laws of
              California, without regard to its conflict of laws provisions.
              Except as otherwise expressly set forth in Section 16
              &ldquo;Dispute Resolution,&rdquo; the exclusive jurisdiction for
              all Disputes (defined below) that you and the Site Operator are
              required to arbitrate will be the courts located in California,
              and you and the Site Operator each waive any objection to
              jurisdiction and venue in such courts.
            </li>
            <li>
              <strong>Dispute Resolution.</strong>
              <ol className='list-[lower-alpha] space-y-8 pl-4 pt-4'>
                <li>
                  <span className='underline'>
                    Mandatory Arbitration of Disputes.
                  </span>
                  &ensp;We each agree that any dispute, claim or controversy
                  arising out of or relating to these Terms or the breach,
                  termination, enforcement, interpretation or validity thereof
                  or the use of the Interface (collectively, &ldquo;
                  <strong>
                    <em>Disputes</em>
                  </strong>
                  &rdquo;) will be resolved{' '}
                  <strong>
                    solely by binding, individual arbitration and not in a
                    class, representative or consolidated action or proceeding
                  </strong>
                  . You and the Site Operator agree that the laws of the state
                  of California govern the interpretation and enforcement of
                  these Terms, and that you and the Site Operator are each
                  waiving the right to a trial by jury or to participate in a
                  class action. This arbitration provision shall survive
                  termination of these Terms.
                </li>
                <li>
                  <span className='underline'>Exceptions.</span>&ensp;As limited
                  exceptions to Section 16(a) above: (i)&nbsp;we both may seek
                  to resolve a Dispute in small claims court if it qualifies;
                  and (ii) we each retain the right to seek injunctive or other
                  equitable relief from a court to prevent (or enjoin) the
                  infringement or misappropriation of our intellectual property
                  rights.
                </li>
                <li>
                  <span className='underline'>
                    Conducting Arbitration and Arbitration Rules.
                  </span>
                  &ensp;The arbitration will be conducted by JAMS under its JAMS
                  Comprehensive Arbitration Rules and Procedures (the &ldquo;
                  <strong>
                    <em>JAMS Rules</em>
                  </strong>
                  &rdquo;) then in effect, except as modified by these Terms.
                  The JAMS Rules are available at https://www.jamsadr.com/. A
                  party who wishes to start arbitration must submit a written
                  Demand for Arbitration to JAMS and give notice to the other
                  party as specified in the JAMS Rules. JAMS provides a form
                  Demand for Arbitration at https://www.jamsadr.com/.
                  <p className='mt-4'>
                    &emsp;Any arbitration hearings will take place in the county
                    (or parish) where you live, unless we both agree to a
                    different location, but will be conducted remotely to the
                    extent permitted by the JAMS Rules. The parties agree that
                    the arbitrator shall have exclusive authority to decide all
                    issues relating to the interpretation, applicability,
                    enforceability and scope of this arbitration agreement.
                  </p>
                </li>
                <li>
                  <span className='underline'>Arbitration Costs.</span>
                  &ensp;Payment of all filing, administration and arbitrator
                  fees will be governed by the JAMS Rules, and we won&rsquo;t
                  seek to recover the administration and arbitrator fees we are
                  responsible for paying, unless the arbitrator finds your
                  Dispute frivolous. If we prevail in arbitration we&rsquo;ll
                  pay all of our attorneys&rsquo; fees and costs and won&rsquo;t
                  seek to recover them from you. If you prevail in arbitration
                  you will be entitled to an award of attorneys&rsquo; fees and
                  expenses to the extent provided under applicable law.
                </li>
                <li>
                  <span className='underline'>
                    Injunctive and Declaratory Relief.
                  </span>
                  &ensp;Except as provided in Section 16(b) above, the
                  arbitrator shall determine all issues of liability on the
                  merits of any claim asserted by either party and may award
                  declaratory or injunctive relief only in favor of the
                  individual party seeking relief and only to the extent
                  necessary to provide relief warranted by that party&rsquo;s
                  individual claim. To the extent that you or we prevail on a
                  claim and seek public injunctive relief (that is, injunctive
                  relief that has the primary purpose and effect of prohibiting
                  unlawful acts that threaten future injury to the public), the
                  entitlement to and extent of such relief must be litigated in
                  a civil court of competent jurisdiction and not in
                  arbitration. The parties agree that litigation of any issues
                  of public injunctive relief shall be stayed pending the
                  outcome of the merits of any individual claims in arbitration.
                </li>
                <li>
                  <span className='underline'>Class Action Waiver.</span>&ensp;
                  <strong>
                    YOU AND THE SITE OPERATOR AGREE THAT EACH MAY BRING CLAIMS
                    AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY,
                    AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED
                    CLASS OR REPRESENTATIVE PROCEEDING.
                  </strong>{' '}
                  Further, if the parties&rsquo; Dispute is resolved through
                  arbitration, the arbitrator may not consolidate another
                  person&rsquo;s claims with your claims, and may not otherwise
                  preside over any form of a representative or class proceeding.
                  If this specific provision is found to be unenforceable, then
                  the entirety of this Dispute Resolution section shall be null
                  and void.
                </li>
                <li>
                  <span className='underline'>Severability.</span>&ensp;With the
                  exception of any of the provisions in Section 16(f) of these
                  Terms (&ldquo;
                  <strong>
                    <em>Class Action Waiver</em>
                  </strong>
                  &rdquo;), if an arbitrator or court of competent jurisdiction
                  decides that any part of these Terms is invalid or
                  unenforceable, the other parts of these Terms will still
                  apply.
                </li>
              </ol>
            </li>
            <li>
              <strong>General Terms.</strong>
              <ol className='list-[lower-alpha] space-y-8 pl-4 pt-4'>
                <li>
                  <span className='underline'>Reservation of Rights.</span>
                  &ensp;The Site Operator and its licensors exclusively own all
                  right, title and interest in and to the Interface, including
                  all associated intellectual property rights. You acknowledge
                  that the Interface are protected by copyright, trademark, and
                  other laws of the United States and foreign countries. You
                  agree not to remove, alter or obscure any copyright,
                  trademark, service mark or other proprietary rights notices
                  incorporated in or accompanying the Interface.
                </li>
                <li>
                  <span className='underline'>Entire Agreement.</span>
                  &ensp;These Terms constitute the entire and exclusive
                  understanding and agreement between the Site Operator and you
                  regarding the Interface, and these Terms supersede and replace
                  all prior oral or written understandings or agreements between
                  the Site Operator and you regarding the Interface. If any
                  provision of these Terms is held invalid or unenforceable by
                  an arbitrator or a court of competent jurisdiction, that
                  provision will be enforced to the maximum extent permissible
                  and the other provisions of these Terms will remain in full
                  force and effect. You may not assign or transfer these Terms,
                  by operation of law or otherwise, without the Site
                  Operator&rsquo;s prior written consent. Any attempt by you to
                  assign or transfer these Terms, without such consent, will be
                  null. The Site Operator may freely assign or transfer these
                  Terms without restriction. Subject to the foregoing, these
                  Terms will bind and inure to the benefit of the parties, their
                  successors and permitted assigns.
                </li>
                <li>
                  <span className='underline'>Notices.</span>&ensp;Any notices
                  or other communications provided by the Site Operator under
                  these Terms will be given: (i)&nbsp;via email; or (ii)&nbsp;by
                  posting to the Interface. For notices made by email, the date
                  of receipt will be deemed the date on which such notice is
                  transmitted.
                </li>
                <li>
                  <span className='underline'>Waiver of Rights.</span>&ensp;The
                  Site Operator&rsquo;s failure to enforce any right or
                  provision of these Terms will not be considered a waiver of
                  such right or provision. The waiver of any such right or
                  provision will be effective only if in writing and signed by a
                  duly authorized representative of the Site Operator. Except as
                  expressly set forth in these Terms, the exercise by either
                  party of any of its remedies under these Terms will be without
                  prejudice to its other remedies under these Terms or
                  otherwise.
                </li>
              </ol>
            </li>
            <li>
              <strong>Contact Information.</strong>&ensp;If you have any
              questions about these Terms or the Interface, please contact the
              Site Operator at Realms@solana.com.
            </li>
          </ol>
        </div>
      </CenteredContent>
    </div>
  );
}
