import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Table, Badge, Button, Alert, Card, Tabs, Tab } from 'react-bootstrap';
import { FaArrowLeft, FaSignInAlt, FaSignOutAlt, FaTrash, FaUserCheck, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';

const ADMIN_PASSWORD = 'WebIt2026!Admin';

const AdminBrandMark = () => (
  <span className="admin-brand-mark" aria-hidden="true"><span>W</span><small>web.it</small></span>
);


function AdminPanel({ employeeOnly = false }) {
  const { t } = useContext(LangContext);
  const [view, setView] = useState(employeeOnly ? 'employee' : 'employee');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEmployee, setIsEmployee] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [alert, setAlert] = useState(null);
  const [requests, setRequests] = useState([]);
  const [pendingEmployees, setPendingEmployees] = useState([]);
  const [approvedEmployees, setApprovedEmployees] = useState([]);

  const [adminPassword, setAdminPassword] = useState('');
  const [employeeForm, setEmployeeForm] = useState({ firstName: '', lastName: '', phone: '', email: '' });

  useEffect(() => {
    loadData();
    const savedAdmin = localStorage.getItem('webStudioAdminLogged');
    if (savedAdmin === 'true') setIsAdmin(true);
    const savedEmp = localStorage.getItem('webStudioEmployeeLogged');
    if (savedEmp) {
      const emp = JSON.parse(savedEmp);
      setCurrentEmployee(emp);
      setIsEmployee(true);
    }
  }, []);

  const loadData = () => {
    const req = localStorage.getItem('webStudioRequests');
    if (req) setRequests(JSON.parse(req).reverse());
    const pend = localStorage.getItem('webStudioPendingEmployees');
    if (pend) setPendingEmployees(JSON.parse(pend));
    const appr = localStorage.getItem('webStudioApprovedEmployees');
    if (appr) setApprovedEmployees(JSON.parse(appr));
  };

  const showAlert = (variant, message) => {
    setAlert({ variant, message });
    setTimeout(() => setAlert(null), 5000);
  };

  const handleEmployeeSubmit = (e) => {
    e.preventDefault();
    if (!employeeForm.firstName || !employeeForm.lastName || !employeeForm.phone || !employeeForm.email) {
      showAlert('danger', 'Заполните все поля!');
      return;
    }

    const existing = approvedEmployees.find(emp => emp.email === employeeForm.email);
    if (existing) {
      setCurrentEmployee(existing);
      setIsEmployee(true);
      setIsAdmin(false); // IMPORTANT: employee is NOT admin
      localStorage.setItem('webStudioEmployeeLogged', JSON.stringify(existing));
      showAlert('success', `Добро пожаловать, ${existing.firstName}!`);
      return;
    }

    const alreadyPending = pendingEmployees.find(emp => emp.email === employeeForm.email);
    if (alreadyPending) {
      showAlert('warning', 'Ваша заявка уже на рассмотрении у администратора.');
      return;
    }

    const newPending = {
      ...employeeForm,
      id: Date.now(),
      submittedAt: new Date().toLocaleString('ru-RU')
    };
    const updated = [...pendingEmployees, newPending];
    localStorage.setItem('webStudioPendingEmployees', JSON.stringify(updated));
    setPendingEmployees(updated);
    setEmployeeForm({ firstName: '', lastName: '', phone: '', email: '' });
    showAlert('info', 'Заявка отправлена администратору на рассмотрение. Ожидайте подтверждения.');
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setIsEmployee(false); // Admin is not employee
      localStorage.setItem('webStudioAdminLogged', 'true');
      localStorage.removeItem('webStudioEmployeeLogged');
      showAlert('success', 'Добро пожаловать, Администратор!');
    } else {
      showAlert('danger', 'Неверный пароль!');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setIsEmployee(false);
    setCurrentEmployee(null);
    localStorage.removeItem('webStudioAdminLogged');
    localStorage.removeItem('webStudioEmployeeLogged');
    setAdminPassword('');
    setView('employee');
  };

  const handleEmployeeLogout = () => {
    setIsEmployee(false);
    setIsAdmin(false);
    setCurrentEmployee(null);
    localStorage.removeItem('webStudioEmployeeLogged');
    localStorage.removeItem('webStudioAdminLogged');
    setView('employee');
  };

  const approveEmployee = (emp) => {
    const updatedPending = pendingEmployees.filter(e => e.id !== emp.id);
    const updatedApproved = [...approvedEmployees, { ...emp, approvedAt: new Date().toLocaleString('ru-RU') }];
    localStorage.setItem('webStudioPendingEmployees', JSON.stringify(updatedPending));
    localStorage.setItem('webStudioApprovedEmployees', JSON.stringify(updatedApproved));
    setPendingEmployees(updatedPending);
    setApprovedEmployees(updatedApproved);
    showAlert('success', `${emp.firstName} ${emp.lastName} — одобрен!`);
  };

  const rejectEmployee = (emp) => {
    const updated = pendingEmployees.filter(e => e.id !== emp.id);
    localStorage.setItem('webStudioPendingEmployees', JSON.stringify(updated));
    setPendingEmployees(updated);
    showAlert('warning', 'Заявка отклонена.');
  };

  const deleteRequest = (id) => {
    const updated = requests.filter(r => r.id !== id);
    localStorage.setItem('webStudioRequests', JSON.stringify(updated.reverse()));
    setRequests(updated);
    showAlert('success', 'Заявка удалена');
  };

  const getProjectTypeLabel = (type) => {
    const types = {
      landing: 'Лендинг', corporate: 'Корпоративный сайт', shop: 'Интернет-магазин',
      webapp: 'Веб-приложение', mobile: 'Мобильное приложение', other: 'Другое'
    };
    return types[type] || type;
  };

  // NOT LOGGED IN
  if (!isAdmin && !isEmployee) {
    return (
      <div className="admin-login-bg">
        <Container>
          <div className="text-center mb-4">
            <Link to="/" style={{textDecoration: 'none'}}>
              <h2 style={{fontWeight: 800, color: '#dc2626'}}>
                Web<span style={{color: '#fbbf24'}}>.</span>it
              </h2>
            </Link>
            <p style={{color: 'var(--text-muted)'}}>
              {view === 'employee' ? 'Вход для сотрудников' : 'Вход для администратора'}
            </p>
          </div>

          {alert && <Alert variant={alert.variant} className="mb-4" style={{maxWidth: 500, margin: '0 auto'}}>{alert.message}</Alert>}

          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <Card className="admin-card">
                <Card.Body style={{padding: '2.5rem'}}>
                  {view === 'employee' ? (
                    <>
                      <h3 style={{fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center', color: 'var(--text-main)'}}>
                        <FaUserCheck style={{marginRight: 8}} /> Вход для сотрудников
                      </h3>
                      <Form onSubmit={handleEmployeeSubmit}>
                        <Row className="g-2">
                          <Col sm={6}>
                            <Form.Group className="mb-2">
                              <Form.Label style={{fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)'}}>Имя *</Form.Label>
                              <Form.Control type="text" value={employeeForm.firstName} onChange={(e) => setEmployeeForm({...employeeForm, firstName: e.target.value})} className="form-control-custom" placeholder="Иван" required />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-2">
                              <Form.Label style={{fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)'}}>Фамилия *</Form.Label>
                              <Form.Control type="text" value={employeeForm.lastName} onChange={(e) => setEmployeeForm({...employeeForm, lastName: e.target.value})} className="form-control-custom" placeholder="Иванов" required />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-2">
                          <Form.Label style={{fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)'}}>Телефон *</Form.Label>
                          <Form.Control type="tel" value={employeeForm.phone} onChange={(e) => setEmployeeForm({...employeeForm, phone: e.target.value})} className="form-control-custom" placeholder="+996 556 991 154" required />
                        </Form.Group>
                        <Form.Group className="mb-4">
                          <Form.Label style={{fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)'}}>Gmail *</Form.Label>
                          <Form.Control type="email" value={employeeForm.email} onChange={(e) => setEmployeeForm({...employeeForm, email: e.target.value})} className="form-control-custom" placeholder="example@gmail.com" required />
                        </Form.Group>
                        <Button type="submit" className="btn-submit w-100">
                          <FaSignInAlt style={{marginRight: 8}} /> Отправить заявку
                        </Button>
                      </Form>
                      <div className="text-center mt-3">
                        <Button variant="link" onClick={() => setView('admin')} className="admin-switch-link">
                          <FaSignInAlt style={{marginRight: 6}} /> Войти как администратор
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 style={{fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center', color: 'var(--text-main)'}}>
                        <FaSignInAlt style={{marginRight: 8}} /> Вход для администратора
                      </h3>
                      <Form onSubmit={handleAdminLogin}>
                        <Form.Group className="mb-4">
                          <Form.Label style={{fontWeight: 600, color: 'var(--text-main)'}}>Пароль</Form.Label>
                          <Form.Control type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="form-control-custom" placeholder="••••••••" required />
                        </Form.Group>
                        <Button type="submit" className="btn-submit w-100">
                          <FaSignInAlt style={{marginRight: 8}} /> Войти
                        </Button>
                      </Form>
                      <div className="text-center mt-3">
                        <Button variant="link" onClick={() => setView('employee')} style={{color: '#dc2626', fontWeight: 600}}>
                          <FaArrowLeft style={{marginRight: 6}} /> Назад
                        </Button>
                      </div>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Link to="/" style={{color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500}}>
              <FaArrowLeft style={{marginRight: 6}} /> {t.back}
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  // EMPLOYEE LOGGED IN (NOT ADMIN)
  if (isEmployee && !isAdmin) {
    return (
      <div style={{minHeight: '100vh', background: 'var(--light)'}}>
        <div style={{background: '#0f172a', color: 'white', padding: '1rem 0'}}>
          <Container>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div className="d-flex align-items-center gap-3">
                <Link to="/" className="admin-brand-link">
                  <AdminBrandMark />
                  <span className="admin-brand-text"><b>Web</b><span>.it</span></span>
                </Link>
                <Badge bg="success" style={{fontSize: '0.8rem'}}>Сотрудник</Badge>
              </div>
              <Button variant="outline-light" size="sm" onClick={handleEmployeeLogout}>
                <FaSignOutAlt /> Выйти
              </Button>
            </div>
          </Container>
        </div>
        <Container className="py-5 text-center">
          <div style={{fontSize: '4rem', marginBottom: '1rem'}}>👋</div>
          <h2 style={{fontWeight: 800, color: 'var(--text-main)'}}>Добро пожаловать, {currentEmployee?.firstName}!</h2>
          <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>Вы успешно вошли в систему как сотрудник.</p>
          <div className="mt-4" style={{background: 'var(--card-bg)', borderRadius: '20px', padding: '2rem', maxWidth: 500, margin: '0 auto', border: '1px solid var(--border-color)'}}>
            <h5 style={{fontWeight: 700, color: 'var(--text-main)'}}>Ваши данные</h5>
            <p style={{color: 'var(--text-muted)', margin: '0.5rem 0'}}><strong>Имя:</strong> {currentEmployee?.firstName} {currentEmployee?.lastName}</p>
            <p style={{color: 'var(--text-muted)', margin: '0.5rem 0'}}><strong>Телефон:</strong> {currentEmployee?.phone}</p>
            <p style={{color: 'var(--text-muted)', margin: '0.5rem 0'}}><strong>Email:</strong> {currentEmployee?.email}</p>
          </div>
        </Container>
      </div>
    );
  }

  // ADMIN VIEW ONLY
  return (
    <div style={{minHeight: '100vh', background: 'var(--light)'}}>
      <div style={{background: '#0f172a', color: 'white', padding: '1rem 0'}}>
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div className="d-flex align-items-center gap-3">
              <Link to="/" className="admin-brand-link">
                <AdminBrandMark />
                <span className="admin-brand-text"><b>Web</b><span>.it</span></span>
              </Link>
              <Badge bg="danger" style={{fontSize: '0.8rem'}}>Администратор</Badge>
            </div>
            <Button variant="outline-light" size="sm" onClick={handleAdminLogout}>
              <FaSignOutAlt /> Выйти
            </Button>
          </div>
        </Container>
      </div>

      <Container className="py-4">
        {alert && <Alert variant={alert.variant} className="mb-4">{alert.message}</Alert>}

        <Tabs defaultActiveKey="pending" className="mb-4">
          <Tab eventKey="pending" title={`Запросы (${pendingEmployees.length})`}>
            <Card className="admin-card">
              <Card.Body style={{padding: '2rem'}}>
                <h4 style={{fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)'}}>Запросы на доступ</h4>
                {pendingEmployees.length === 0 ? (
                  <div className="text-center py-5">
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📭</div>
                    <h5 style={{color: 'var(--text-muted)'}}>Нет новых запросов</h5>
                  </div>
                ) : (
                  <div style={{overflowX: 'auto'}}>
                    <Table hover style={{fontSize: '0.9rem'}}>
                      <thead>
                        <tr style={{background: 'var(--light)'}}>
                          <th>Имя</th><th>Фамилия</th><th>Телефон</th><th>Gmail</th><th>Дата</th><th>Действия</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingEmployees.map(emp => (
                          <tr key={emp.id}>
                            <td style={{fontWeight: 600, color: 'var(--text-main)'}}>{emp.firstName}</td>
                            <td style={{color: 'var(--text-main)'}}>{emp.lastName}</td>
                            <td style={{color: 'var(--text-main)'}}>{emp.phone}</td>
                            <td style={{color: 'var(--text-main)'}}>{emp.email}</td>
                            <td style={{color: 'var(--text-muted)'}}>{emp.submittedAt}</td>
                            <td>
                              <Button variant="success" size="sm" onClick={() => approveEmployee(emp)} style={{marginRight: 8, borderRadius: '6px'}}>
                                <FaCheck /> Одобрить
                              </Button>
                              <Button variant="danger" size="sm" onClick={() => rejectEmployee(emp)} style={{borderRadius: '6px'}}>
                                <FaTimes /> Отклонить
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="employees" title={`Сотрудники (${approvedEmployees.length})`}>
            <Card className="admin-card">
              <Card.Body style={{padding: '2rem'}}>
                <h4 style={{fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)'}}>Подтверждённые сотрудники</h4>
                {approvedEmployees.length === 0 ? (
                  <p style={{color: 'var(--text-muted)'}}>Пока нет подтверждённых сотрудников</p>
                ) : (
                  <div style={{overflowX: 'auto'}}>
                    <Table hover style={{fontSize: '0.9rem'}}>
                      <thead>
                        <tr style={{background: 'var(--light)'}}>
                          <th>Имя</th><th>Фамилия</th><th>Телефон</th><th>Gmail</th><th>Одобрено</th>
                        </tr>
                      </thead>
                      <tbody>
                        {approvedEmployees.map(emp => (
                          <tr key={emp.id}>
                            <td style={{fontWeight: 600, color: 'var(--text-main)'}}>{emp.firstName}</td>
                            <td style={{color: 'var(--text-main)'}}>{emp.lastName}</td>
                            <td style={{color: 'var(--text-main)'}}>{emp.phone}</td>
                            <td style={{color: 'var(--text-main)'}}>{emp.email}</td>
                            <td style={{color: 'var(--text-muted)'}}>{emp.approvedAt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="requests" title={`Заявки (${requests.length})`}>
            <Card className="admin-card">
              <Card.Body style={{padding: '2rem'}}>
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                  <h4 style={{fontWeight: 700, margin: 0, color: 'var(--text-main)'}}>Заявки клиентов</h4>
                  <Button variant="outline-primary" size="sm" onClick={loadData} style={{borderRadius: '8px', fontWeight: 600}}>Обновить</Button>
                </div>
                {requests.length === 0 ? (
                  <div className="text-center py-5">
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📭</div>
                    <h5 style={{color: 'var(--text-muted)'}}>Пока нет заявок</h5>
                  </div>
                ) : (
                  <div style={{overflowX: 'auto'}}>
                    <Table hover style={{fontSize: '0.9rem', whiteSpace: 'nowrap'}}>
                      <thead>
                        <tr style={{background: 'var(--light)'}}>
                          <th>№</th><th>Дата</th><th>Имя</th><th>Телефон</th><th>Email</th><th>Тип</th><th>Сообщение</th><th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {requests.map((req, idx) => (
                          <tr key={req.id}>
                            <td style={{fontWeight: 700, color: 'var(--text-main)'}}>#{requests.length - idx}</td>
                            <td style={{color: 'var(--text-main)'}}>{req.date}</td>
                            <td style={{fontWeight: 600, color: 'var(--text-main)'}}>{req.name || '—'}</td>
                            <td><a href={`tel:${req.phone}`} style={{color: '#dc2626', textDecoration: 'none', fontWeight: 500}}>{req.phone}</a></td>
                            <td style={{color: 'var(--text-main)'}}>{req.email || '—'}</td>
                            <td><Badge bg="danger" style={{fontWeight: 500}}>{getProjectTypeLabel(req.projectType)}</Badge></td>
                            <td style={{maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--text-main)'}}>{req.message || '—'}</td>
                            <td><Button variant="outline-danger" size="sm" onClick={() => deleteRequest(req.id)} style={{borderRadius: '6px'}}><FaTrash /></Button></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default AdminPanel;
