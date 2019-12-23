package cn.tedu.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import cn.tedu.entity.UserInfo;
import cn.tedu.utils.DBUtils;

/**   
 * @包名 cn.tedu.dao 
 * @作者名 XM Yang   
 * @时间 2019年11月23日 下午3:01:59 
 */
public class UserDao {

	public void userAdd(UserInfo user, int a) {
		//获取连接
		try (Connection conn = DBUtils.getConn();) {
			String sql = "insert into userinfo values(null,?,?,?,?,?,?,?,?)";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, user.getUserName());
			ps.setString(2, user.getPassword());
			ps.setString(3, user.getName());
			ps.setString(4, user.getCard());
			ps.setString(5, user.getBirth());
			ps.setString(6, user.getSize());
			ps.setString(7, user.getPhone());
			ps.setInt(8, a);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	public UserInfo login(UserInfo user) {
		UserInfo userInfo = null;
		//获取连接
		try (Connection conn = DBUtils.getConn();) {
			String sql = "select userName from userinfo where userName=? and password=?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, user.getUserName());
			ps.setString(2, user.getPassword());
			System.out.println("15:"+user.getUserName());
			System.out.println("14:"+user.getPassword());
			ResultSet rs = ps.executeQuery();
			//System.out.println("12:"+rs.next());
			while(rs.next()) {
				System.out.println(1234455);
				userInfo = new UserInfo(rs.getString(1), null);
			}
			
			rs.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userInfo;
	}
	
}
