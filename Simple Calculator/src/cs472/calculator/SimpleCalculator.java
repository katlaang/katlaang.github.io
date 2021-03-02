package cs472.calculator;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SimpleCalculator
 */
@WebServlet(description = "Simple calculator", urlPatterns = { "/SimpleCalculator" })
public class SimpleCalculator extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public SimpleCalculator() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		out.print("<html><head><title>Test</title></head><body>");
		// out.print(request.getParameter("num1")+request.getParameter("num1"));
		int sum = 0;
		int product = 0;
		if ((!request.getParameter("num1").equals(null) && !request.getParameter("num2").equals(null))) {
			int num1 = Integer.parseInt(request.getParameter("num1"));
			int num2 = Integer.parseInt(request.getParameter("num2"));
			sum = num1 + num2;
			out.print(num1 + " + " + num2 + " = " + sum + "<br>");
		}

		if (!(request.getParameter("num3").equals(null) || request.getParameter("num4").equals(null))) {
			int num3 = Integer.parseInt(request.getParameter("num3"));
			int num4 = Integer.parseInt(request.getParameter("num4"));

			product = num3 * num4;

			out.print(num3 + " * " + num4 + " = " + product + "<br>");
		}
		out.print("</body></html>");

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}