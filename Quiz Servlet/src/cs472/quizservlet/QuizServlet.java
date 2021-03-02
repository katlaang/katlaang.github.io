package cs472.quizservlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class QuizServlet
 */
@WebServlet(description="Quiz Servlet", urlPatterns = "/QuizServlet")
public class QuizServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        response.setContentType("text/html;charset=UTF-8");
	        try (PrintWriter out = response.getWriter()) {
	            /* TODO output your page here. You may use following sample code. */
	            out.println("<!DOCTYPE html>");
	            out.println("<html>");
	            out.println("<head>");
	            out.println("<title>Servlet QuizServlet</title>");            
	            out.println("</head>");
	            out.println("<body>");
	            out.println("<h1>Servlet QuizServlet at " + request.getContextPath() + "</h1>");
	            out.println("</body>");
	            out.println("</html>");
	        }
	    }

	    
	    @Override
	    protected void doGet(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        doPost(request, response);
	    }

	    /**
	     * Handles the HTTP <code>POST</code> method.
	     *
	     * @param request servlet request
	     * @param response servlet response
	     * @throws ServletException if a servlet-specific error occurs
	     * @throws IOException if an I/O error occurs
	     */
	    @Override
	    protected void doPost(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        
	        HttpSession session = request.getSession();
	        Object obj  = session.getAttribute("quiz");
	        if(obj==null){
	            session.setAttribute("quiz", new Quiz());
	        }
	        
	        Object score  = session.getAttribute("score");
	        if(obj==null){
	            session.setAttribute("score", 0);
	        }
	        Quiz q = (Quiz)session.getAttribute("quiz");
	        
	        String guess = request.getParameter("guess");
	        if(null!=guess && !"".equals(guess)){
	            if(q.getAnswer() == Integer.parseInt(guess)){
	                session.setAttribute("score", (int)score+1);
	            }
	        } 
	        response.setContentType("text/html;charset=UTF-8");
	        try (PrintWriter out = response.getWriter()) {
	            out.println("<!DOCTYPE html>");
	            out.println("<html>");
	            out.println("<head>");
	            out.println("<title>Quiz Servlet Lab</title>");            
	            out.println("</head>");
	            out.println("<body>");
	            out.println("<h1>The Number Quiz</h1>");
	            out.println("<p>Your current score is "+(int)session.getAttribute("score")+"</p>");
	            if(q.hasQ()){
	                out.println("<p>Guess the next number in the sequence</p>");
	                out.println("<p>"+q.getNextQ()+"</p>");
	                out.println("<form action='submit.do' method='POST'");
	                out.println("<p>Your answer:<input type=\"number\" name=\"guess\"/></p>");
	                out.println("<p><input type ='submit' /></p>");
	                out.println("</form>");  
	            }else{
	                out.println("<p>You have completed the Number Quiz with a score of "+(int)session.getAttribute("score")+" out of 5</p>");
	            }
	            out.println("</body>");
	            out.println("</html>");
	        }
	    }

}
