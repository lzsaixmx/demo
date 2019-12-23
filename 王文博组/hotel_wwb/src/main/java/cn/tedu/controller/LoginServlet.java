package cn.tedu.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import cn.tedu.dao.UserDao;
import cn.tedu.entity.UserInfo;


public class LoginServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		String rem = request.getParameter("rem");
		System.out.println("111:"+rem);
		System.out.println(userName+":"+password);
		UserInfo user = new UserInfo(userName,password);
		UserDao dao = new UserDao();
		UserInfo userInfo = dao.login(user);
		System.out.println("123:"+userInfo);
		if(userInfo!=null) {
			if(rem!=null) {
				Cookie c1 = new Cookie("userName",userName);
				Cookie c2 = new Cookie("password",password);
				response.addCookie(c1);
				response.addCookie(c2);
			}
			HttpSession session = request.getSession();
			session.setAttribute("user", user);
			response.sendRedirect(request.getContextPath()+"/HomeServlet");
		}else {
			response.sendRedirect(request.getContextPath()+"/ShowLoginServlet");
		}
	}

}
