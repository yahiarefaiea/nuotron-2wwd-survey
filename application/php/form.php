<?php
if (isset($_POST["dd"])) {
	$data= json_decode($_POST["dd"]);
  $headers= "MIME-Version: 1.0\r\n";
	$headers.= "From: Yahia Refaiea <hello@yahiarefaiea.com>\r\n";
  $headers.= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	//  USER VARIABLES
	$userName= $data[12]->answer[0]->answer;
	$userEmail= $data[12]->answer[1]->answer;
  $userSubject= "Team Nuotron - Thanks for your help";

	//  MY VARIABLES
	$myName= "Yahia Refaiea";
	$myEmail= "2wwd@nuotron.co";

	if ($userName === 'Passed empty..') {
		$userName= "";
	}
	//	USER MESSAGE
  $userMessage= '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><title>Team Nuotron - Thanks for your help</title></head><body style="margin: 0;"><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="padding: 56px 14px 56px 14px; background-color: #eee;"><tr><td align="left" valign="top"><table border="0" cellpadding="0" cellspacing="0" style="min-width: 400px; width: 100%; max-width: 560px; margin: 0 auto;"><tr><td align="left" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px; padding: 0 56px 0 56px;"><tr><td align="left" valign="top"><a href="https://nuotron.yahiarefaiea.com/survey/" target="_blank" style="display: block; text-decoration: none; width: 56px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/nuotron.png" height="56px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 14px; line-height: 56px; color: #727272;" alt="Nuotron Logo" title="Nuotron Logo"/></a></td></tr><tr><td align="left" valign="top" style="padding-top: 21px;"><span style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 28px; color: #464646;"><span>Hello <span style="font-weight: 700;">'. $userName .'</span>,<br/>Thank you for helping us by taking the survey</span></span></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #c657a0;"><tr><td align="center" valign="top"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/love-cover.png" width="100%" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 28px; line-height: 210px; color: #9e4680;" alt="Nuotron Cover" title="Nuotron Cover"/></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 25px; padding: 28px 56px 28px 56px; background-color: #fff;"><tr><td align="left" valign="top"><span style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 14px; line-height: 28px; color: #727272;"><span style="display: block; margin-bottom: 7px;">Words fail to describe the kind of contribution that you brought to us. We can never forget your help. It's something which is indeed quite valuable to us.</span><span style="display: block; margin-bottom: 7px;">We'll try to come up with a better product or service based on your feedback and what matters for what you're doing.</span><span style="display: block;">Keep up the good work,<br/>Team Nuotron</span></span></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="left" valign="top" style="padding-left: 46px;"><a href="https://nuotron.yahiarefaiea.com/survey/" target="_blank" style="display: block; text-decoration: none; width: 122px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/nuotron-flat.png" height="35px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 14px; line-height: 35px; color: #727272;" alt="Nuotron Logo" title="Nuotron Logo"/></a></td><td align="right" valign="top" style="padding-top: 3px; padding-right: 46px;"><a href="https://nuotron.yahiarefaiea.com/survey/" target="_blank" style="display: inline-block; text-decoration: none; width: 28px; margin-left: 14px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/website.png" height="28px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 12px; line-height: 28px; color: #727272;" alt="Website" title="Nuotron on the web"/></a><a href="https://facebook.com/Nuotron/" target="_blank" style="display: inline-block; text-decoration: none; width: 28px; margin-left: 14px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/facebook.png" height="28px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 12px; line-height: 28px; color: #727272;" alt="Facebook" title="Nuotron on Facebook"/></a><a href="https://twitter.com/Nuotron/" target="_blank" style="display: inline-block; text-decoration: none; width: 28px; margin-left: 14px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/twitter.png" height="28px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 12px; line-height: 28px; color: #727272;" alt="Twitter" title="Nuotron on Twitter"/></a><a href="https://instagram.com/Nuotron/" target="_blank" style="display: inline-block; text-decoration: none; width: 28px; margin-left: 14px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/instagram.png" height="28px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 12px; line-height: 28px; color: #727272;" alt="Instagram" title="Nuotron on Instagram"/></a></td></tr><tr><td align="left" valign="top" style="padding-top: 3px; padding-left: 56px;"><span style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 21px; color: #929292;">This might be the last email you receive<br/>reach me out through: <a href="https://yahiarefaiea.com" target="_blank" style="color: #929292;">yahiarefaiea.com</a></span></td></tr></table></td></tr></table></td></tr></table></body></html>';

	//	MY MESSAGE
  $myMessage= '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><title>Nuotron Survey - New Feedback Received</title></head><body style="margin: 0;"><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="padding: 56px 14px 56px 14px; background-color: #eee;"><tr><td align="left" valign="top"><table border="0" cellpadding="0" cellspacing="0" style="min-width: 400px; width: 100%; max-width: 560px; margin: 0 auto;"><tr><td align="left" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px; padding: 0 56px 0 56px;"><tr><td align="left" valign="top"><a href="https://nuotron.yahiarefaiea.com/survey/" target="_blank" style="display: block; text-decoration: none; width: 56px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/nuotron.png" height="56px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 14px; line-height: 56px; color: #727272;" alt="Nuotron Logo" title="Nuotron Logo"/></a></td></tr><tr><td align="left" valign="top" style="padding-top: 21px;"><span style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px; line-height: 28px; color: #464646;"><span>Hello <span style="font-weight: 700;">Yahia Refaiea</span>,<br/>You have a new feedback to look at</span></span></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #c657a0;"><tr><td align="center" valign="top"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/nuotron-cover.png" width="100%" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 28px; line-height: 210px; color: #9e4680;" alt="Nuotron Cover" title="Nuotron Cover"/></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 25px; padding: 28px 56px 28px 56px; background-color: #fff;"><tr><td align="left" valign="top"><span style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 14px; line-height: 28px; color: #727272;">';

	if ($userName === '') {
		$userName= "Someone";
	}
  $mySubject= "Nuotron Survey - New Feedback from ". $userName;
  $myMessage.= '<span style="display: block; margin-bottom: 21px;">'. $userName .' has just sent a feedback to the Nuotron survey.</span>';

  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">01. '. $data[0]->question .'</span>';
  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[0]->answer .'</span>';

	if ($data[1]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">02. '. $data[1]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[1]->answer .'</span>';
	}

	if ($data[2]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">03. '. $data[2]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[2]->answer .'</span>';
	}

	if ($data[3]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">04. '. $data[3]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[3]->answer .'</span>';
	}

	if ($data[4]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">05. '. $data[4]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[4]->answer .'</span>';
	}

	if ($data[5]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">06. '. $data[5]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[5]->answer .'</span>';
	}

	if ($data[6]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">07. '. $data[6]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[6]->answer .'</span>';
	}

	if ($data[7]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">08. '. $data[7]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[7]->answer .'</span>';
	}

	if ($data[8]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">09. '. $data[8]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[8]->answer .'</span>';
	}

	if ($data[9]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">10. '. $data[9]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[9]->answer .'</span>';
	}

	if ($data[10]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">11. '. $data[10]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[10]->answer .'</span>';
	}

	if ($data[11]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">12. '. $data[11]->question .'</span>';
	  $myMessage.=                                        '<span style="display: block; margin-bottom: 21px; color: #545454;">'. $data[11]->answer .'</span>';
	}

	if ($data[12]->answer[0]->answer !== 'Passed empty..' || $data[12]->answer[1]->answer !== 'Passed empty..' || $data[12]->answer[2]->answer !== 'Passed empty..') {
	  $myMessage.= '<span style="display: block; margin-bottom: 7px; font-size: 12px; line-height: 21px; color: #929292;">13. '. $data[12]->question .'</span>';
		if ($data[12]->answer[0]->answer !== 'Passed empty..') {
			$myMessage.= '<span style="display: block; color: #545454;"><span style="font-weight: 700; font-size: 12px; color: #929292;">'. $data[12]->answer[0]->question .':</span> '. $data[12]->answer[0]->answer .'</span>';
		}
		if ($data[12]->answer[1]->answer !== 'Passed empty..') {
			$myMessage.= '<span style="display: block; color: #545454;"><span style="font-weight: 700; font-size: 12px; color: #929292;">'. $data[12]->answer[1]->question .':</span> <i><a href="mailto:'. $data[12]->answer[1]->answer .'" target="_blank" style="color: #727272;">'. $data[12]->answer[1]->answer .'</a></i></span>';
		}
		if ($data[12]->answer[2]->answer !== 'Passed empty..') {
			$myMessage.= '<span style="display: block; margin-bottom: 21px; color: #545454;"><span style="font-weight: 700; font-size: 12px; color: #929292;">'. $data[12]->answer[2]->question .':</span> '. $data[12]->answer[2]->answer .'</span>';
		}
	}

  $myMessage.= '<span style="display: block;">Keep up the good work,<br/>Team Nuotron</span></span></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="left" valign="top" style="padding-left: 46px;"><a href="https://nuotron.yahiarefaiea.com/survey/" target="_blank" style="display: block; text-decoration: none; width: 122px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/nuotron-flat.png" height="35px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 14px; line-height: 35px; color: #727272;" alt="Nuotron Logo" title="Nuotron Logo"/></a></td><td align="right" valign="top" style="padding-top: 3px; padding-right: 46px;"><a href="https://nuotron.yahiarefaiea.com/survey/" target="_blank" style="display: inline-block; text-decoration: none; width: 28px; margin-left: 14px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/website.png" height="28px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 12px; line-height: 28px; color: #727272;" alt="Website" title="Nuotron on the web"/></a><a href="https://facebook.com/Nuotron/" target="_blank" style="display: inline-block; text-decoration: none; width: 28px; margin-left: 14px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/facebook.png" height="28px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 12px; line-height: 28px; color: #727272;" alt="Facebook" title="Nuotron on Facebook"/></a><a href="https://twitter.com/Nuotron/" target="_blank" style="display: inline-block; text-decoration: none; width: 28px; margin-left: 14px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/twitter.png" height="28px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 12px; line-height: 28px; color: #727272;" alt="Twitter" title="Nuotron on Twitter"/></a><a href="https://instagram.com/Nuotron/" target="_blank" style="display: inline-block; text-decoration: none; width: 28px; margin-left: 14px;"><img src="https://nuotron.yahiarefaiea.com/survey/includes/images/mails/instagram.png" height="28px" style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 700; font-size: 12px; line-height: 28px; color: #727272;" alt="Instagram" title="Nuotron on Instagram"/></a></td></tr><tr><td align="left" valign="top" style="padding-top: 3px; padding-left: 56px;"><span style="display: block; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 12px; line-height: 21px; color: #929292;">This might be the last email you receive<br/>reach me out through: <a href="https://yahiarefaiea.com" target="_blank" style="color: #929292;">yahiarefaiea.com</a></span></td></tr></table></td></tr></table></td></tr></table></body></html>';

	//	SEND MAILS
	if ($userEmail !== 'Passed empty..') {
	  mail($userEmail,$userSubject,$userMessage,$headers);
	}
  mail($myEmail,$mySubject,$myMessage,$headers);

	//  RESPONSE
	$response_array['status']= 'success';
	echo json_encode($response_array);
}
?>
