package cn.tedu.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.tedu.dao.checkoutDao;
import cn.tedu.entity.Check;


public class CheckoutServlet extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = request.getParameter("name");
		String room = request.getParameter("room");
		System.out.println("room:"+room);
		System.out.println("name:"+name);
		Check check = new Check(Integer.parseInt(room),0, name);
		checkoutDao dao = new checkoutDao();
		dao.delete(check);
		//�ض���
		response.sendRedirect(request.getContextPath()+"/checkout.html");
	}

}
