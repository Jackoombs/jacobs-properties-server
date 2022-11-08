export const createUserTemplate = (name, code) => {
  return(
  `
    <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      <style type="text/css" emogrify="no">
        #outlook a {
          padding: 0;
        }
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        table td {
          border-collapse: collapse;
          mso-line-height-rule: exactly;
        }
        .editable.image {
          font-size: 0 !important;
          line-height: 0 !important;
        }
        .nl2go_preheader {
          display: none !important;
          mso-hide: all !important;
          mso-line-height-rule: exactly;
          visibility: hidden !important;
          line-height: 0px !important;
          font-size: 0px !important;
        }
        body {
          width: 100% !important;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          margin: 0;
          padding: 0;
        }
        img {
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
        a img {
          border: none;
        }
        table {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        th {
          font-weight: normal;
          text-align: left;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
      </style>
      <style type="text/css" emogrify="no">
        @media (max-width: 600px) {
          .gmx-killpill {
            content: " \\03D1";
          }
        }
      </style>
      <style type="text/css" emogrify="no">
        @media (max-width: 600px) {
          .gmx-killpill {
            content: " \\03D1";
          }
          .r0-c {
            box-sizing: border-box !important;
            width: 100% !important;
          }
          .r1-o {
            border-style: solid !important;
            width: 100% !important;
          }
          .r2-i {
            background-color: transparent !important;
          }
          .r3-c {
            box-sizing: border-box !important;
            text-align: center !important;
            valign: top !important;
            width: 320px !important;
          }
          .r4-o {
            border-style: solid !important;
            margin: 0 auto 0 auto !important;
            width: 320px !important;
          }
          .r5-i {
            padding-bottom: 5px !important;
            padding-top: 5px !important;
          }
          .r6-c {
            box-sizing: border-box !important;
            display: block !important;
            valign: top !important;
            width: 100% !important;
          }
          .r7-i {
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .r8-c {
            box-sizing: border-box !important;
            text-align: center !important;
            width: 100% !important;
          }
          .r9-o {
            border-style: solid !important;
            margin: 0 auto 0 auto !important;
            width: 100% !important;
          }
          .r10-i {
            padding-left: 10px !important;
            padding-right: 10px !important;
            padding-top: 20px !important;
            text-align: center !important;
          }
          .r11-c {
            box-sizing: border-box !important;
            text-align: center !important;
            valign: top !important;
            width: 100% !important;
          }
          .r12-i {
            padding-bottom: 20px !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
            padding-top: 20px !important;
          }
          .r13-c {
            box-sizing: border-box !important;
            text-align: center !important;
            valign: top !important;
            width: 200px !important;
          }
          .r14-o {
            background-size: auto !important;
            border-style: solid !important;
            margin: 0 auto 0 auto !important;
            width: 200px !important;
          }
          .r15-i {
            padding-bottom: 15px !important;
            padding-top: 15px !important;
          }
          .r16-o {
            background-size: cover !important;
            border-style: solid !important;
            margin: 0 auto 0 auto !important;
            width: 100% !important;
          }
          .r17-i {
            padding-bottom: 0px !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
            padding-top: 0px !important;
          }
          .r18-c {
            box-sizing: border-box !important;
            text-align: left !important;
            valign: top !important;
            width: 100% !important;
          }
          .r19-o {
            border-style: solid !important;
            margin: 0 auto 0 0 !important;
            width: 100% !important;
          }
          .r20-i {
            text-align: left !important;
          }
          .r21-i {
            padding-top: 25px !important;
            text-align: left !important;
          }
          .r22-i {
            padding-top: 5px !important;
            text-align: left !important;
          }
          .r23-i {
            padding-bottom: 0px !important;
            padding-top: 15px !important;
            text-align: left !important;
          }
          .r24-i {
            padding-bottom: 15px !important;
            padding-top: 15px !important;
            text-align: left !important;
          }
          .r25-i {
            padding-bottom: 0px !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
            padding-top: 0px !important;
            text-align: center !important;
          }
          .r26-o {
            background-size: auto !important;
            border-style: solid !important;
            margin: 0 auto 0 auto !important;
            width: 100% !important;
          }
          .r27-i {
            font-size: 0px !important;
            padding-bottom: 2px !important;
            padding-left: 85px !important;
            padding-right: 85px !important;
            padding-top: 2px !important;
          }
          .r28-c {
            box-sizing: border-box !important;
            width: 32px !important;
          }
          .r29-o {
            border-style: solid !important;
            margin-right: 8px !important;
            width: 32px !important;
          }
          .r30-o {
            border-style: solid !important;
            margin-right: 0px !important;
            width: 32px !important;
          }
          .r31-i {
            padding-bottom: 2px !important;
            padding-top: 2px !important;
            text-align: center !important;
          }
          .r32-i {
            color: #3b3f44 !important;
            padding-bottom: 3px !important;
            padding-top: 2px !important;
            text-align: center !important;
          }
          body {
            -webkit-text-size-adjust: none;
          }
          .nl2go-responsive-hide {
            display: none;
          }
          .nl2go-body-table {
            min-width: unset !important;
          }
          .mobshow {
            height: auto !important;
            overflow: visible !important;
            max-height: unset !important;
            visibility: visible !important;
            border: none !important;
          }
          .resp-table {
            display: inline-table !important;
          }
          .magic-resp {
            display: table-cell !important;
          }
        }
      </style>
      <!--[if !mso]><!-->
      <style type="text/css" emogrify="no">
        @import url("https://fonts.googleapis.com/css2?family=Vollkorn:wght@700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
      </style>
      <!--<![endif]-->
      <style type="text/css">
        p,
        h1,
        h2,
        h3,
        h4,
        ol,
        ul {
          margin: 0;
        }
        a,
        a:link {
          color: #ffffff;
          text-decoration: none;
        }
        .nl2go-default-textstyle {
          color: #392f65;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.5;
        }
        .default-button {
          border-radius: 30px;
          color: #ffffff;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 1.15;
          text-decoration: none;
          width: 273px;
        }
        .nl2go_class_14_white_l {
          color: #ffffff;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 300;
        }
        .nl2go_class_14_white_reg {
          color: #ffffff;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 14px;
        }
        .nl2go_class_14_white_b {
          color: #ffffff;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 700;
        }
        .nl2go_class_16_white_reg_up {
          color: #ffffff;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 16px;
          text-transform: uppercase;
        }
        .nl2go_class_16_blue_reg {
          color: #392f65;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 16px;
        }
        .nl2go_class_24_blue_b {
          color: #392f65;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 700;
        }
        .nl2go_class_48_blue_vollkorn_b {
          color: #392f65;
          font-family: Vollkorn, Georgia, Times, Times New Roman, serif, Arial;
          font-size: 48px;
        }
        .nl2go_class_headline {
          color: #677876;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 26px;
        }
        .nl2go_class_impressum {
          color: #999999;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 12px;
          font-style: italic;
        }
        .default-heading1 {
          color: #392f65;
          font-family: Vollkorn, Georgia, Times, Times New Roman, serif, Arial;
          font-size: 48px;
        }
        .default-heading2 {
          color: #392f65;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 24px;
        }
        .default-heading3 {
          color: #392f65;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 20px;
        }
        .default-heading4 {
          color: #392f65;
          font-family: Roboto, Arial, Helvetica, sans-serif;
          font-size: 18px;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .no-show-for-you {
          border: none;
          display: none;
          float: none;
          font-size: 0;
          height: 0;
          line-height: 0;
          max-height: 0;
          mso-hide: all;
          overflow: hidden;
          table-layout: fixed;
          visibility: hidden;
          width: 0;
        }
      </style>
      <!--[if mso
        ]><xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml><!
      [endif]-->
      <style type="text/css">
        a:link {
          color: #fff;
          text-decoration: none;
        }
      </style>
    </head>
    <body yahoo="fix" style="" text="#392F65" link="#ffffff">
      <table
        role="presentation"
        class="nl2go-body-table"
        style="width: 100%"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr>
            <td class="r0-c" align="">
              <table
                role="presentation"
                class="r1-o"
                style="table-layout: fixed; width: 100%"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <!-- -->
                <tbody>
                  <tr>
                    <td
                      class="r2-i"
                      style="background-color: transparent"
                      valign="top"
                    >
                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td class="r3-c" align="center">
                              <table
                                role="presentation"
                                class="r4-o"
                                style="table-layout: fixed"
                                width="600"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <!-- -->
                                <tbody>
                                  <tr class="nl2go-responsive-hide">
                                    <td
                                      style="font-size: 5px; line-height: 5px"
                                      height="5"
                                    >
                                      ­
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="r5-i">
                                      <table
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <th
                                              class="r6-c"
                                              style="font-weight: normal"
                                              width="100%"
                                              valign="top"
                                            >
                                              <table
                                                role="presentation"
                                                class="r1-o"
                                                style="
                                                  table-layout: fixed;
                                                  width: 100%;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <!-- -->
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      class="nl2go-responsive-hide"
                                                      style="
                                                        font-size: 0px;
                                                        line-height: 1px;
                                                      "
                                                      width="10"
                                                    >
                                                      ­
                                                    </td>
                                                    <td class="r7-i" valign="top">
                                                      <table
                                                        role="presentation"
                                                        width="100%"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              class="r8-c"
                                                              align="center"
                                                            >
                                                              <table
                                                                role="presentation"
                                                                class="r9-o"
                                                                style="
                                                                  table-layout: fixed;
                                                                  width: 100%;
                                                                "
                                                                width="100%"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                              >
                                                                <tbody>
                                                                  <tr
                                                                    class="nl2go-responsive-hide"
                                                                  >
                                                                    <td
                                                                      style="
                                                                        font-size: 20px;
                                                                        line-height: 20px;
                                                                      "
                                                                      width="30"
                                                                      height="20"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                    <td
                                                                      style="
                                                                        font-size: 20px;
                                                                        line-height: 20px;
                                                                      "
                                                                      height="20"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                    <td
                                                                      style="
                                                                        font-size: 20px;
                                                                        line-height: 20px;
                                                                      "
                                                                      width="30"
                                                                      height="20"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <td
                                                                      class="nl2go-responsive-hide"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 1px;
                                                                      "
                                                                      width="30"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                    <td
                                                                      class="r10-i nl2go-default-textstyle"
                                                                      style="
                                                                        color: #392f65;
                                                                        font-family: Roboto,
                                                                          Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-size: 16px;
                                                                        line-height: 1.5;
                                                                        text-align: center;
                                                                      "
                                                                      align="center"
                                                                    >
                                                                      <div>
                                                                        <p
                                                                          style="
                                                                            margin: 0;
                                                                          "
                                                                        >
                                                                          <a
                                                                            href="{{ mirror }}"
                                                                            style="
                                                                              color: #fff;
                                                                              text-decoration: none;
                                                                            "
                                                                            ><span
                                                                              style="
                                                                                color: #392f65;
                                                                              "
                                                                              >View
                                                                              in
                                                                              browser</span
                                                                            ></a
                                                                          >
                                                                        </p>
                                                                      </div>
                                                                    </td>
                                                                    <td
                                                                      class="nl2go-responsive-hide"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 1px;
                                                                      "
                                                                      width="30"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                    <td
                                                      class="nl2go-responsive-hide"
                                                      style="
                                                        font-size: 0px;
                                                        line-height: 1px;
                                                      "
                                                      width="10"
                                                    >
                                                      ­
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr class="nl2go-responsive-hide">
                                    <td
                                      style="font-size: 5px; line-height: 5px"
                                      height="5"
                                    >
                                      ­
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td class="r3-c" align="center">
              <table
                role="presentation"
                class="r4-o"
                style="table-layout: fixed; width: 600px"
                width="600"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tbody>
                  <tr>
                    <td class="" valign="top">
                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td class="r11-c" align="center">
                              <table
                                role="presentation"
                                class="r9-o"
                                style="table-layout: fixed; width: 100%"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <!-- -->
                                <tbody>
                                  <tr class="nl2go-responsive-hide">
                                    <td
                                      style="font-size: 20px; line-height: 20px"
                                      height="20"
                                    >
                                      ­
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="r12-i">
                                      <table
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <th
                                              class="r6-c"
                                              style="font-weight: normal"
                                              width="100%"
                                              valign="top"
                                            >
                                              <table
                                                role="presentation"
                                                class="r1-o"
                                                style="
                                                  table-layout: fixed;
                                                  width: 100%;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <!-- -->
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      class="nl2go-responsive-hide"
                                                      style="
                                                        font-size: 0px;
                                                        line-height: 1px;
                                                      "
                                                      width="15"
                                                    >
                                                      ­
                                                    </td>
                                                    <td class="r7-i" valign="top">
                                                      <table
                                                        role="presentation"
                                                        width="100%"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              class="r13-c"
                                                              align="center"
                                                            >
                                                              <table
                                                                role="presentation"
                                                                class="r14-o"
                                                                style="
                                                                  table-layout: fixed;
                                                                  width: 200px;
                                                                "
                                                                width="200"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                              >
                                                                <tbody>
                                                                  <tr
                                                                    class="nl2go-responsive-hide"
                                                                  >
                                                                    <td
                                                                      style="
                                                                        font-size: 15px;
                                                                        line-height: 15px;
                                                                      "
                                                                      height="15"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <td
                                                                      class="r15-i"
                                                                      style="
                                                                        font-size: 0px;
                                                                        line-height: 0px;
                                                                      "
                                                                    >
                                                                      <img
                                                                        src="https://send.integratedinterest.com/public/upload/147489/images/content_library/original/635b96526f9c70689a36561b."
                                                                        class=""
                                                                        style="
                                                                          display: block;
                                                                          width: 100%;
                                                                        "
                                                                        width="200"
                                                                        border="0"
                                                                      />
                                                                    </td>
                                                                  </tr>
                                                                  <tr
                                                                    class="nl2go-responsive-hide"
                                                                  >
                                                                    <td
                                                                      style="
                                                                        font-size: 15px;
                                                                        line-height: 15px;
                                                                      "
                                                                      height="15"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                    <td
                                                      class="nl2go-responsive-hide"
                                                      style="
                                                        font-size: 0px;
                                                        line-height: 1px;
                                                      "
                                                      width="15"
                                                    >
                                                      ­
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr class="nl2go-responsive-hide">
                                    <td
                                      style="font-size: 20px; line-height: 20px"
                                      height="20"
                                    >
                                      ­
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td class="r11-c" align="center">
                              <table
                                role="presentation"
                                class="r16-o"
                                style="table-layout: fixed; width: 100%"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <!-- -->
                                <tbody>
                                  <tr>
                                    <td class="r17-i">
                                      <table
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <th
                                              class="r6-c"
                                              style="font-weight: normal"
                                              width="100%"
                                              valign="top"
                                            >
                                              <table
                                                role="presentation"
                                                class="r1-o"
                                                style="
                                                  table-layout: fixed;
                                                  width: 100%;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <!-- -->
                                                <tbody>
                                                  <tr>
                                                    <td class="r7-i" valign="top">
                                                      <table
                                                        role="presentation"
                                                        width="100%"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              class="r18-c"
                                                              align="left"
                                                            >
                                                              <table
                                                                role="presentation"
                                                                class="r19-o"
                                                                style="
                                                                  table-layout: fixed;
                                                                  width: 100%;
                                                                "
                                                                width="100%"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                              >
                                                                <tbody>
                                                                  <tr>
                                                                    <td
                                                                      class="r20-i nl2go-default-textstyle"
                                                                      style="
                                                                        color: #392f65;
                                                                        font-family: Roboto,
                                                                          Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-size: 16px;
                                                                        line-height: 1.1;
                                                                        text-align: left;
                                                                      "
                                                                      valign="top"
                                                                      align="left"
                                                                    >
                                                                      <div>
                                                                        <h1
                                                                          class="default-heading1"
                                                                          style="
                                                                            margin: 0;
                                                                            color: #392f65;
                                                                            font-family: Vollkorn,
                                                                              Georgia,
                                                                              Times,
                                                                              Times
                                                                                New
                                                                                Roman,
                                                                              serif,
                                                                              Arial;
                                                                            font-size: 48px;
                                                                          "
                                                                        >
                                                                          <span
                                                                            style="
                                                                              color: #bfd730;
                                                                            "
                                                                            >Refer a Friend</span
                                                                          >
                                                                        </h1>
                                                                      </div>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td
                                                              class="r18-c"
                                                              align="left"
                                                            >
                                                              <table
                                                                role="presentation"
                                                                class="r19-o"
                                                                style="
                                                                  table-layout: fixed;
                                                                  width: 100%;
                                                                "
                                                                width="100%"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                              >
                                                                <tbody>
                                                                  <tr
                                                                    class="nl2go-responsive-hide"
                                                                  >
                                                                    <td
                                                                      style="
                                                                        font-size: 25px;
                                                                        line-height: 25px;
                                                                      "
                                                                      height="25"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <td
                                                                      class="r21-i nl2go-default-textstyle"
                                                                      style="
                                                                        color: #392f65;
                                                                        font-family: Roboto,
                                                                          Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-size: 16px;
                                                                        line-height: 1.5;
                                                                        text-align: left;
                                                                      "
                                                                      valign="top"
                                                                      align="left"
                                                                    >
                                                                      <div>
                                                                        <h2
                                                                          class="default-heading2"
                                                                          style="
                                                                            margin: 0;
                                                                            color: #392f65;
                                                                            font-family: Roboto,
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 24px;
                                                                          "
                                                                        >
                                                                          Dear ${name}
                                                                        </h2>
                                                                      </div>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td
                                                              class="r18-c"
                                                              align="left"
                                                            >
                                                              <table
                                                                role="presentation"
                                                                class="r19-o"
                                                                style="
                                                                  table-layout: fixed;
                                                                  width: 100%;
                                                                "
                                                                width="100%"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                              >
                                                                <tbody>
                                                                  <tr
                                                                    class="nl2go-responsive-hide"
                                                                  >
                                                                    <td
                                                                      style="
                                                                        font-size: 5px;
                                                                        line-height: 5px;
                                                                      "
                                                                      height="5"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <td
                                                                      class="r22-i nl2go-default-textstyle"
                                                                      style="
                                                                        color: #392f65;
                                                                        font-family: Roboto,
                                                                          Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-size: 16px;
                                                                        line-height: 1.5;
                                                                        text-align: left;
                                                                      "
                                                                      valign="top"
                                                                      align="left"
                                                                    >
                                                                      <div>
                                                                        <p style="margin: 0;">
                                                                          Congratualtions you're refer a friend code has arrived.
                                                                        </p>
                                                                        <p style="margin: 0;">&nbsp;</p>
                                                                        <h3 class=".default-heading3" style="text-align: center; margin: 0;">${code}</h3>
                                                                        <p style="margin: 0;">&nbsp;</p>
                                                                        <p style="margin: 0; font-size: 14px">Hope to hear from you soon</p>
                                                                        <p style="margin: 0;">&nbsp;</p>
                                                                        <p style="margin: 0;">Jacobs Properties</p>
                                                                      </div>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table> 
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td class="r11-c" align="center">
                              <table
                                role="presentation"
                                class="r9-o"
                                style="table-layout: fixed; width: 100%"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <!-- -->
                                <tbody>
                                  <tr>
                                    <td class="r17-i">
                                      <table
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <th
                                              class="r6-c"
                                              style="font-weight: normal"
                                              width="100%"
                                              valign="top"
                                            >
                                              <table
                                                role="presentation"
                                                class="r1-o"
                                                style="
                                                  table-layout: fixed;
                                                  width: 100%;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <!-- -->
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      class="nl2go-responsive-hide"
                                                      style="
                                                        font-size: 0px;
                                                        line-height: 1px;
                                                      "
                                                      width="15"
                                                    >
                                                      ­
                                                    </td>
                                                    <td class="r7-i" valign="top">
                                                      <table
                                                        role="presentation"
                                                        width="100%"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              class="r18-c"
                                                              align="left"
                                                            >
                                                              <table
                                                                role="presentation"
                                                                class="r19-o"
                                                                style="
                                                                  table-layout: fixed;
                                                                  width: 100%;
                                                                "
                                                                width="100%"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                              >
                                                                <tbody>
                                                                  <tr>
                                                                    <td
                                                                      class="r25-i nl2go-default-textstyle"
                                                                      style="
                                                                        color: #392f65;
                                                                        font-family: Roboto,
                                                                          Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-size: 16px;
                                                                        line-height: 1.5;
                                                                        text-align: center;
                                                                      "
                                                                      valign="top"
                                                                      align="center"
                                                                    >
                                                                      <div>
                                                                        <p
                                                                          style="
                                                                            margin: 0;
                                                                          "
                                                                        >
                                                                          <a
                                                                            href="https://jacobs.properties/properties-for-sale/"
                                                                            target="_blank"
                                                                            style="
                                                                              color: #fff;
                                                                              text-decoration: none;
                                                                            "
                                                                            ><span
                                                                              style="
                                                                                color: #392f65;
                                                                              "
                                                                              >Buy</span
                                                                            ></a
                                                                          ><span
                                                                            style="
                                                                              color: #392f65;
                                                                            "
                                                                          >
                                                                            &nbsp;
                                                                            &nbsp;&nbsp;</span
                                                                          ><a
                                                                            href="https://jacobs.properties/for-owners/"
                                                                            target="_blank"
                                                                            style="
                                                                              color: #fff;
                                                                              text-decoration: none;
                                                                            "
                                                                            ><span
                                                                              style="
                                                                                color: #392f65;
                                                                              "
                                                                              >Sell</span
                                                                            ></a
                                                                          ><span
                                                                            style="
                                                                              color: #392f65;
                                                                            "
                                                                          >
                                                                            &nbsp;
                                                                            &nbsp;&nbsp;</span
                                                                          ><a
                                                                            href="https://jacobs.properties/properties-to-rent/"
                                                                            target="_blank"
                                                                            style="
                                                                              color: #fff;
                                                                              text-decoration: none;
                                                                            "
                                                                            ><span
                                                                              style="
                                                                                color: #392f65;
                                                                              "
                                                                              >Rent</span
                                                                            ></a
                                                                          ><span
                                                                            style="
                                                                              color: #392f65;
                                                                            "
                                                                          >
                                                                            &nbsp;
                                                                            &nbsp;</span
                                                                          ><a
                                                                            href="https://jacobs.properties/for-landlords/"
                                                                            target="_blank"
                                                                            style="
                                                                              color: #fff;
                                                                              text-decoration: none;
                                                                            "
                                                                            ><span
                                                                              style="
                                                                                color: #392f65;
                                                                              "
                                                                              >Let</span
                                                                            ></a
                                                                          ><span
                                                                            style="
                                                                              color: #392f65;
                                                                            "
                                                                          >
                                                                            &nbsp;
                                                                            &nbsp;&nbsp;</span
                                                                          ><a
                                                                            href="https://jacobs.properties/contact-us/"
                                                                            target="_blank"
                                                                            style="
                                                                              color: #fff;
                                                                              text-decoration: none;
                                                                            "
                                                                            ><span
                                                                              style="
                                                                                color: #392f65;
                                                                              "
                                                                              >Contact</span
                                                                            ></a
                                                                          >
                                                                        </p>
                                                                      </div>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                    <td
                                                      class="nl2go-responsive-hide"
                                                      style="
                                                        font-size: 0px;
                                                        line-height: 1px;
                                                      "
                                                      width="15"
                                                    >
                                                      ­
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td class="r11-c" align="center">
                              <table
                                role="presentation"
                                class="r26-o"
                                style="table-layout: fixed; width: 100%"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <!-- -->
                                <tbody>
                                  <tr>
                                    <td class="r17-i">
                                      <table
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <th
                                              class="r6-c"
                                              style="font-weight: normal"
                                              width="100%"
                                              valign="top"
                                            >
                                              <table
                                                role="presentation"
                                                class="r1-o"
                                                style="
                                                  table-layout: fixed;
                                                  width: 100%;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <!-- -->
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      class="nl2go-responsive-hide"
                                                      style="
                                                        font-size: 0px;
                                                        line-height: 1px;
                                                      "
                                                      width="15"
                                                    >
                                                      ­
                                                    </td>
                                                    <td class="r7-i" valign="top">
                                                      <table
                                                        role="presentation"
                                                        width="100%"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td class="r0-c">
                                                              <table
                                                                role="presentation"
                                                                class="r1-o"
                                                                style="
                                                                  table-layout: fixed;
                                                                  width: 570px;
                                                                "
                                                                width="570"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                              >
                                                                <!-- -->
                                                                <tbody>
                                                                  <tr>
                                                                    <td
                                                                      class=""
                                                                      valign="top"
                                                                    >
                                                                      <table
                                                                        role="presentation"
                                                                        width="100%"
                                                                        cellspacing="0"
                                                                        cellpadding="0"
                                                                        border="0"
                                                                      >
                                                                        <tbody>
                                                                          <tr>
                                                                            <td
                                                                              class="r8-c"
                                                                              style="
                                                                                display: inline-block;
                                                                              "
                                                                              align="center"
                                                                            >
                                                                              <table
                                                                                role="presentation"
                                                                                class="r9-o"
                                                                                style="
                                                                                  table-layout: fixed;
                                                                                  width: 570px;
                                                                                "
                                                                                width="570"
                                                                                cellspacing="0"
                                                                                cellpadding="0"
                                                                                border="0"
                                                                              >
                                                                                <!-- -->
                                                                                <tbody>
                                                                                  <tr
                                                                                    class="nl2go-responsive-hide"
                                                                                  >
                                                                                    <td
                                                                                      style="
                                                                                        font-size: 2px;
                                                                                        line-height: 2px;
                                                                                      "
                                                                                      width="227"
                                                                                      height="2"
                                                                                    >
                                                                                      ­
                                                                                    </td>
                                                                                    <td
                                                                                      style="
                                                                                        font-size: 2px;
                                                                                        line-height: 2px;
                                                                                      "
                                                                                      height="2"
                                                                                    >
                                                                                      ­
                                                                                    </td>
                                                                                    <td
                                                                                      style="
                                                                                        font-size: 2px;
                                                                                        line-height: 2px;
                                                                                      "
                                                                                      width="227"
                                                                                      height="2"
                                                                                    >
                                                                                      ­
                                                                                    </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                    <td
                                                                                      class="nl2go-responsive-hide"
                                                                                      style="
                                                                                        font-size: 0px;
                                                                                        line-height: 1px;
                                                                                      "
                                                                                      width="227"
                                                                                    >
                                                                                      ­
                                                                                    </td>
                                                                                    <td
                                                                                      class="r27-i"
                                                                                    >
                                                                                      <table
                                                                                        role="presentation"
                                                                                        width="100%"
                                                                                        cellspacing="0"
                                                                                        cellpadding="0"
                                                                                        border="0"
                                                                                      >
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <th
                                                                                              class="r28-c mobshow resp-table"
                                                                                              style="
                                                                                                font-weight: normal;
                                                                                              "
                                                                                              width="42"
                                                                                              valign=""
                                                                                            >
                                                                                              <table
                                                                                                role="presentation"
                                                                                                class="r29-o"
                                                                                                style="
                                                                                                  table-layout: fixed;
                                                                                                  width: 100%;
                                                                                                "
                                                                                                width="100%"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0"
                                                                                                border="0"
                                                                                              >
                                                                                                <!-- -->
                                                                                                <tbody>
                                                                                                  <tr
                                                                                                    class="nl2go-responsive-hide"
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      width="10"
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                    <td
                                                                                                      class="r5-i"
                                                                                                      style="
                                                                                                        font-size: 0px;
                                                                                                        line-height: 0px;
                                                                                                      "
                                                                                                    >
                                                                                                      <img
                                                                                                        src="https://sendinblue-templates.s3.eu-west-3.amazonaws.com/icons/rounded_colored/facebook_32px.png"
                                                                                                        class=""
                                                                                                        style="
                                                                                                          display: block;
                                                                                                          width: 100%;
                                                                                                        "
                                                                                                        width="32"
                                                                                                        border="0"
                                                                                                      />
                                                                                                    </td>
                                                                                                    <td
                                                                                                      class="nl2go-responsive-hide"
                                                                                                      style="
                                                                                                        font-size: 0px;
                                                                                                        line-height: 1px;
                                                                                                      "
                                                                                                      width="10"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr
                                                                                                    class="nl2go-responsive-hide"
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      width="10"
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                </tbody>
                                                                                              </table>
                                                                                            </th>
                                                                                            <th
                                                                                              class="r28-c mobshow resp-table"
                                                                                              style="
                                                                                                font-weight: normal;
                                                                                              "
                                                                                              width="42"
                                                                                              valign=""
                                                                                            >
                                                                                              <table
                                                                                                role="presentation"
                                                                                                class="r29-o"
                                                                                                style="
                                                                                                  table-layout: fixed;
                                                                                                  width: 100%;
                                                                                                "
                                                                                                width="100%"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0"
                                                                                                border="0"
                                                                                              >
                                                                                                <!-- -->
                                                                                                <tbody>
                                                                                                  <tr
                                                                                                    class="nl2go-responsive-hide"
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      width="10"
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                    <td
                                                                                                      class="r5-i"
                                                                                                      style="
                                                                                                        font-size: 0px;
                                                                                                        line-height: 0px;
                                                                                                      "
                                                                                                    >
                                                                                                      <img
                                                                                                        src="https://sendinblue-templates.s3.eu-west-3.amazonaws.com/icons/rounded_colored/instagram_32px.png"
                                                                                                        class=""
                                                                                                        style="
                                                                                                          display: block;
                                                                                                          width: 100%;
                                                                                                        "
                                                                                                        width="32"
                                                                                                        border="0"
                                                                                                      />
                                                                                                    </td>
                                                                                                    <td
                                                                                                      class="nl2go-responsive-hide"
                                                                                                      style="
                                                                                                        font-size: 0px;
                                                                                                        line-height: 1px;
                                                                                                      "
                                                                                                      width="10"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr
                                                                                                    class="nl2go-responsive-hide"
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      width="10"
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                </tbody>
                                                                                              </table>
                                                                                            </th>
                                                                                            <th
                                                                                              class="r28-c mobshow resp-table"
                                                                                              style="
                                                                                                font-weight: normal;
                                                                                              "
                                                                                              width="32"
                                                                                              valign=""
                                                                                            >
                                                                                              <table
                                                                                                role="presentation"
                                                                                                class="r30-o"
                                                                                                style="
                                                                                                  table-layout: fixed;
                                                                                                  width: 100%;
                                                                                                "
                                                                                                width="100%"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0"
                                                                                                border="0"
                                                                                              >
                                                                                                <!-- -->
                                                                                                <tbody>
                                                                                                  <tr
                                                                                                    class="nl2go-responsive-hide"
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                    <td
                                                                                                      class="r5-i"
                                                                                                      style="
                                                                                                        font-size: 0px;
                                                                                                        line-height: 0px;
                                                                                                      "
                                                                                                    >
                                                                                                      <img
                                                                                                        src="https://sendinblue-templates.s3.eu-west-3.amazonaws.com/icons/rounded_colored/youtube_32px.png"
                                                                                                        class=""
                                                                                                        style="
                                                                                                          display: block;
                                                                                                          width: 100%;
                                                                                                        "
                                                                                                        width="32"
                                                                                                        border="0"
                                                                                                      />
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr
                                                                                                    class="nl2go-responsive-hide"
                                                                                                  >
                                                                                                    <td
                                                                                                      style="
                                                                                                        font-size: 5px;
                                                                                                        line-height: 5px;
                                                                                                      "
                                                                                                      height="5"
                                                                                                    >
                                                                                                      ­
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                </tbody>
                                                                                              </table>
                                                                                            </th>
                                                                                          </tr>
                                                                                        </tbody>
                                                                                      </table>
                                                                                    </td>
                                                                                    <td
                                                                                      class="nl2go-responsive-hide"
                                                                                      style="
                                                                                        font-size: 0px;
                                                                                        line-height: 1px;
                                                                                      "
                                                                                      width="227"
                                                                                    >
                                                                                      ­
                                                                                    </td>
                                                                                  </tr>
                                                                                  <tr
                                                                                    class="nl2go-responsive-hide"
                                                                                  >
                                                                                    <td
                                                                                      style="
                                                                                        font-size: 2px;
                                                                                        line-height: 2px;
                                                                                      "
                                                                                      width="227"
                                                                                      height="2"
                                                                                    >
                                                                                      ­
                                                                                    </td>
                                                                                    <td
                                                                                      style="
                                                                                        font-size: 2px;
                                                                                        line-height: 2px;
                                                                                      "
                                                                                      height="2"
                                                                                    >
                                                                                      ­
                                                                                    </td>
                                                                                    <td
                                                                                      style="
                                                                                        font-size: 2px;
                                                                                        line-height: 2px;
                                                                                      "
                                                                                      width="227"
                                                                                      height="2"
                                                                                    >
                                                                                      ­
                                                                                    </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                            </td>
                                                                          </tr>
                                                                        </tbody>
                                                                      </table>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td
                                                              class="r18-c"
                                                              align="left"
                                                            >
                                                              <table
                                                                role="presentation"
                                                                class="r19-o"
                                                                style="
                                                                  table-layout: fixed;
                                                                  width: 100%;
                                                                "
                                                                width="100%"
                                                                cellspacing="0"
                                                                cellpadding="0"
                                                                border="0"
                                                              >
                                                                <tbody>
                                                                  <tr
                                                                    class="nl2go-responsive-hide"
                                                                  >
                                                                    <td
                                                                      style="
                                                                        font-size: 2px;
                                                                        line-height: 2px;
                                                                      "
                                                                      height="2"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                  <tr>
                                                                    <td
                                                                      class="r31-i nl2go-default-textstyle"
                                                                      style="
                                                                        color: #392f65;
                                                                        font-family: Roboto,
                                                                          Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-size: 16px;
                                                                        line-height: 1;
                                                                        text-align: center;
                                                                      "
                                                                      valign="top"
                                                                      align="center"
                                                                    >
                                                                      <div>
                                                                        <div
                                                                          class="nl2go_class_14_white_l"
                                                                          style="
                                                                            color: #fff;
                                                                            font-family: Roboto,
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 14px;
                                                                            font-weight: 300;
                                                                          "
                                                                        >
                                                                          <span
                                                                            style="
                                                                              color: #392f65;
                                                                              font-size: 11px;
                                                                            "
                                                                            >Jacobs
                                                                            Properties,
                                                                            Worting
                                                                            House,
                                                                            Worting
                                                                            Road,
                                                                            Basingstoke,
                                                                            RG23
                                                                            8PY</span
                                                                          >
                                                                        </div>
                                                                      </div>
                                                                    </td>
                                                                  </tr>
                                                                  <tr
                                                                    class="nl2go-responsive-hide"
                                                                  >
                                                                    <td
                                                                      style="
                                                                        font-size: 2px;
                                                                        line-height: 2px;
                                                                      "
                                                                      height="2"
                                                                    >
                                                                      ­
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                    <td
                                                      class="nl2go-responsive-hide"
                                                      style="
                                                        font-size: 0px;
                                                        line-height: 1px;
                                                      "
                                                      width="15"
                                                    >
                                                      ­
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </th>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <script>
        function addEventHandler(elem, eventType, handler) {
          if (elem.addEventListener)
            elem.addEventListener(eventType, handler, false);
          else if (elem.attachEvent) elem.attachEvent("on" + eventType, handler);
        }

        function cancelDefaultAction(e) {
          var evt = e ? e : window.event;
          if (evt.preventDefault) evt.preventDefault();
          evt.returnValue = false;
          return false;
        }
        var sEventType = "click";
        var links = document.getElementsByTagName("a");
        var linksCnt = links.length;
        if (linksCnt > 0) {
          for (var i = 0; i < linksCnt; i++) {
            addEventHandler(links[i], sEventType, cancelDefaultAction);
          }
        }
      </script>
    </body>
  </html>
    `
  )
}