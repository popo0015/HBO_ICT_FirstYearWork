<!DOCTYPE html>
<html>
	<head><title>Experiment 2d</title></head>
	<body>
		<h1>HTML Forms explained</h1>
		<form method="POST" action="https://posttestserver.dev/p/SILVIA/post">
        Your name: <input type="text" name="name"><br>
        Your password: <input type="password" name="pwd"><br>
        <input type="submit" value="Send"></input>
		</form>
		<p>
            <?php
                if ( isset( $_POST['name'] ) ) 
                {
                    echo "Hello ".$_POST['name'];
                } 
            ?>
        </p>
	</body>
</html>