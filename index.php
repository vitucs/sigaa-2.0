<html>
	<head>
		<meta http-equiv="Pragma" content="no-cache">
		<title>SIGAA - Sistema de Gestão das Atividades Acadêmicas</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
	</head>
<body>
	<div id="painel-mensagem-envio_mask" class="mask" style="z-index: 5; height: 694px; width: 2560px;">&nbsp;</div>
	<div id="container">
		<div id="cabecalho">
			<div id="info-sistema">
				<h1><span>UFRB - SIGAA -</span></h1>
				<h3>Sistema de Gestão das Atividades Acadêmicas</h3>
				<div class="dir"></div>
			</div>
			<div id="painel-usuario" style="height: 20px;">
				<div id="menu-principal"></div>
			</div>
		</div>


		<div id="conteudo">
			<div style="margin: 0 auto; background: #EFF3FA; padding: 10px;" align="center">
				<p style="font-weight: bold; color: #F00;">ATENÇÃO!</p>
				<p style="width: 75%;"> O sistema diferencia letras maiúsculas de minúsculas APENAS na senha,
					portanto ela deve ser digitada da mesma maneira que no cadastro.</p>
			</div>


			<div style="width: 100%; margin: 0 auto; padding: 10px 0;" align="center">
				<table style="border-collapse: separate; border-spacing: 3px" width="100%" align="center">
					<tbody>
						<tr>
							<td class="painel sistemaAtual">
								<a href="https://sistemas.ufrb.edu.br/sigaa/?modo=classico">
									SIGAA</a> <br>
								(Acadêmico)
							</td>
							<td class="painel ">
								<a href="https://sistemas.ufrb.edu.br/sipac/?modo=classico">
									SIPAC</a><br>
								(Administrativo)
							</td>
							<td class="painel ">
								<a href="https://sistemas.ufrb.edu.br/sigrh/?modo=classico">
									SIGRH</a><br>
								(Recursos Humanos)
							</td>
							<td class="painel ">
								<a href="https://sistemas.ufrb.edu.br/sigpp/">
									SIGPP</a><br>
								(Planejamento e Projetos)
							</td>
						</tr>
						<tr>
							<td class="painel ">
								<a href="https://sistemas.ufrb.edu.br/admin/">
									SIGAdmin</a><br>
								(Administração e Comunicação)
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<center> 

				Esqueceu o login? matrícula ? <a href="https://sistemas.ufrb.edu.br/admin/public/recuperar_login.jsf">Clique aqui para recuperá-lo.</a> <br>

			</center>


			<center>
				Ainda não tem ou esqueceu a senha? <a href="#">Clique aqui para criar uma nova.</a> <strong>(somente para discentes)</strong>
			</center>

			<br clear="all">

			<br>
			<center style="color: #922; font-weight: bold;"></center>

			<br>
			<div class="logon" style="width:50%; margin: 0 auto;">
				<h3> Entrar no Sistema </h3>
				<form name="loginForm" method="post" action="">
					<input type="hidden" name="width" value="2560" id="width">
					<input type="hidden" name="height" value="1080" id="height">
					<input type="hidden" name="urlRedirect" value="">
					<input type="hidden" name="subsistemaRedirect" value="">
					<input type="hidden" name="acao" value="">
					<input type="hidden" name="acessibilidade" value="">

					<table width="100%" cellspacing="0" cellpadding="3" align="center">
						<tbody>
							<tr>
								<th width="35%"> Login: </th>
								<td align="left"> <input type="text" name="user.login" size="20" value=""></td>
							</tr>
							<tr>
								<th> Senha: </th>
								<td> <input type="password" name="user.senha" size="20" value=""> </td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="2" align="center">
									<input type="submit" value="Entrar">
								</td>
							</tr>
						</tfoot>
					</table>
				</form>

			</div>

			<div class="clear"> </div>

		</div>
		<br>



		<div id="rodape">
			<p> SIGAA | Coordenadoria de Tecnologia da Informação - - | Copyright © 2006-2022 - UFRB - app4.srv4inst1


				- <a>v3.17.4035.ufrb</a>

			</p>
		</div>


	</div>

	<div class="panel-container dialog shadow" id="painel-mensagem-envio_c" style="z-index: 6; left: 929px; top: 451px;">
		<div id="painel-mensagem-envio" class=" module overlay panel" style="visibility: inherit; width: 700px;">
			<div class="hd" style="cursor: move;" id="painel-mensagem-envio_h">Mensagem</div>
			<div class="bd">Aguarde...<form name="frm_painel-mensagem-envio" action=""></form>
			</div>
			<div class="ft"><span class="button-group"><button type="button" class="default">Enviar</button><button type="button">Cancelar</button></span></div>
			<div class=" close secure">&nbsp;</div>
		</div>
		<div class="underlay">&nbsp;</div>
	</div>

</body>

</html>