<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>improved calculation</title>
</head>
<body>
    <form method="post" action="UpCalcJsp">
        <input type="text" name="a" value="${a}"> + <input type="text" name="b" value="${b}"> = <input type="text" name="sum" value="${sum}">
        <br>
        <input type="text" name="c" value="${c}"> * <input type="text" name="d" value="${d}"> = <input type="text" name="mul" value="${mul}">
        <br>
        <input type="submit">
    </form>
</body>
</html>