package com.miu.onlinedictionary.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.miu.onlinedictionary.dao.DbConnection;
import java.io.PrintWriter;
import java.sql.Connection;
//import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;




@WebServlet(description = "Controller servlet for Pasco Dico", urlPatterns = { "/DictSevlet" })
public class DictSevlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DictSevlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String att = request.getParameter("Requestd");
        Connection con = new DbConnection().connect();
        PrintWriter out = response.getWriter();
        try {
            String sql1 = "select * from entries where word like '"+att+"'";
            Statement statement = con.createStatement();
            
            ResultSet result = statement.executeQuery(sql1);
            int  counter= 1;
            while (result.next()) {
                
                out.print("<p >"+ counter+" "+ result.getString(1) + " " + result.getString(2) + " " + result.getString(3) + "</p>");
                //out.print("<div><table><td>" + result.getString(1) + " " + result.getString(2) + " " + result.getString(3) +"</td><table><div>");
                counter++;
            }
            if(counter == 1) {
            	out.print("<p>Sorry, not found!!</p>");
            }
        } catch (Exception e) {
            e.printStackTrace();
            out.print(e.getMessage()+att);
        }

    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
