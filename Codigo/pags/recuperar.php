<form method="POST">
	<h4>Recuperar Senha</h4>
	<label>Insira o email cadastrado</label>
	<input type="email" name="email" class="form-control" required>
	<code>Insira o email cadastrado para receber a senha.</code><br><br><br>

	<input type="submit" value="Enviar dados" class="btn btn-outline-success btn-lg btn-block">
	<input type="hidden" name="env" value="form">
</form>
<?php echo verifica_dados($con);?>