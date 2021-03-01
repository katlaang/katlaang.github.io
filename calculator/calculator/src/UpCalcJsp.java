

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
/**
 * Servlet implementation class UpCalcJsp
 */
@WebServlet("/UpCalcJsp")
public class UpCalcJsp extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public UpCalcJsp() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
        String a=request.getParameter("a");
        String b=request.getParameter("b");
        String c=request.getParameter("c");
        String d=request.getParameter("d");
        int sum =Integer.parseInt(a)+Integer.parseInt(b);
        request.setAttribute("sum",Integer.toString(sum));
        int mul =Integer.parseInt(c)*Integer.parseInt(d);
        request.setAttribute("mul",Integer.toString(mul));
        request.setAttribute("a",a);
        request.setAttribute("b",b);
        request.setAttribute("c",c);
        request.setAttribute("d",d);
        request.getRequestDispatcher("index.jsp").forward(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
