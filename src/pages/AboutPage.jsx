import React from 'react';

const AboutPage = () => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      backgroundColor: '#fff'
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '3rem',
      color: '#2c3e50',
      marginBottom: '15px',
      fontWeight: '700'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#7f8c8d',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    section: {
      marginBottom: '60px',
      padding: '30px',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#d35400',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '2px solid #f1c40f',
      display: 'inline-block'
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginTop: '30px'
    },
    featureCard: {
      backgroundColor: '#fff',
      padding: '25px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%'
    },
    featureCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    },
    featureIcon: {
      fontSize: '2.5rem',
      color: '#d35400',
      marginBottom: '15px'
    },
    featureTitle: {
      fontSize: '1.3rem',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    featureDescription: {
      color: '#7f8c8d',
      lineHeight: '1.6'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      marginTop: '30px'
    },
    teamMember: {
      textAlign: 'center'
    },
    teamMemberImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      margin: '0 auto 15px',
      border: '4px solid #f1c40f'
    },
    teamMemberName: {
      fontSize: '1.2rem',
      color: '#2c3e50',
      marginBottom: '5px'
    },
    teamMemberRole: {
      color: '#d35400',
      fontStyle: 'italic'
    },
    valuesList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    },
    valueItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '15px'
    },
    valueIcon: {
      color: '#f1c40f',
      fontSize: '1.5rem',
      marginRight: '15px',
      flexShrink: '0'
    },
    valueContent: {
      flex: '1'
    },
    valueTitle: {
      fontSize: '1.1rem',
      color: '#2c3e50',
      marginBottom: '5px'
    },
    valueDescription: {
      color: '#7f8c8d',
      lineHeight: '1.5'
    },
    ctaSection: {
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#d35400',
      color: '#fff',
      borderRadius: '10px',
      marginTop: '40px'
    },
    ctaTitle: {
      fontSize: '2rem',
      marginBottom: '15px'
    },
    ctaButton: {
      display: 'inline-block',
      backgroundColor: '#fff',
      color: '#d35400',
      padding: '12px 30px',
      borderRadius: '30px',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginTop: '15px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    ctaButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    },
    paragraph: {
      lineHeight: '1.8',
      marginBottom: '20px',
      color: '#555'
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '20px'
    },
    listItem: {
      marginBottom: '10px',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About AyurDiet</h1>
        <p style={styles.subtitle}>
          Bridging ancient Ayurvedic wisdom with modern nutritional science for personalized wellness
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.paragraph}>
          Welcome to <strong>AyurDiet</strong>! Our platform combines traditional Ayurvedic principles 
          with modern nutrition science to create personalized diet plans for individuals based on 
          their unique body constitution (dosha), health goals, and lifestyle.
        </p>
        <p style={styles.paragraph}>
          Using Ayurvedic insights, we provide comprehensive solutions that address not just dietary needs 
          but holistic wellbeing, ensuring that our users can achieve optimal health naturally and sustainably.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Offer</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📊</div>
            <h3 style={styles.featureTitle}>Personalized Diet Charts</h3>
            <p style={styles.featureDescription}>
              Customized nutrition plans for fat loss, wellness, and energy balance based on your unique dosha profile.
            </p>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🌅</div>
            <h3 style={styles.featureTitle}>Daily Recommendations</h3>
            <p style={styles.featureDescription}>
              Tailored daily guidance aligned with your dosha type to optimize digestion, energy, and overall wellbeing.
            </p>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🌿</div>
            <h3 style={styles.featureTitle}>Home Remedies</h3>
            <p style={styles.featureDescription}>
              Natural remedies and lifestyle guidance for holistic health that complement your dietary plan.
            </p>
          </div>
          
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📄</div>
            <h3 style={styles.featureTitle}>PDF Reports</h3>
            <p style={styles.featureDescription}>
              Comprehensive reports for easy tracking and sharing with healthcare providers for integrated care.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <div style={styles.valuesList}>
          <div style={styles.valueItem}>
            <div style={styles.valueIcon}>✓</div>
            <div style={styles.valueContent}>
              <h3 style={styles.valueTitle}>Authenticity</h3>
              <p style={styles.valueDescription}>
                We stay true to traditional Ayurvedic principles while validating them with modern scientific research.
              </p>
            </div>
          </div>
          
          <div style={styles.valueItem}>
            <div style={styles.valueIcon}>✓</div>
            <div style={styles.valueContent}>
              <h3 style={styles.valueTitle}>Personalization</h3>
              <p style={styles.valueDescription}>
                We recognize that each individual is unique and requires a customized approach to nutrition and wellness.
              </p>
            </div>
          </div>
          
          <div style={styles.valueItem}>
            <div style={styles.valueIcon}>✓</div>
            <div style={styles.valueContent}>
              <h3 style={styles.valueTitle}>Holistic Approach</h3>
              <p style={styles.valueDescription}>
                We address the interconnectedness of body, mind, and spirit in our recommendations for true wellbeing.
              </p>
            </div>
          </div>
          
          <div style={styles.valueItem}>
            <div style={styles.valueIcon}>✓</div>
            <div style={styles.valueContent}>
              <h3 style={styles.valueTitle}>Sustainability</h3>
              <p style={styles.valueDescription}>
                We promote practices that are not only effective but also sustainable for long-term health and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamMember}>
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Dr. Priya Sharma" 
              style={styles.teamMemberImage}
            />
            <h3 style={styles.teamMemberName}>Dr. Priya Sharma</h3>
            <p style={styles.teamMemberRole}>Founder & Ayurvedic Expert</p>
          </div>
          
          <div style={styles.teamMember}>
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Dr. Raj Patel" 
              style={styles.teamMemberImage}
            />
            <h3 style={styles.teamMemberName}>Dr. Raj Patel</h3>
            <p style={styles.teamMemberRole}>Nutrition Science Director</p>
          </div>
          
          <div style={styles.teamMember}>
            <img 
              src="https://randomuser.me/api/portraits/women/68.jpg" 
              alt="Anita Desai" 
              style={styles.teamMemberImage}
            />
            <h3 style={styles.teamMemberName}>Anita Desai</h3>
            <p style={styles.teamMemberRole}>Wellness Coach</p>
          </div>
          
          <div style={styles.teamMember}>
            <img 
              src="https://randomuser.me/api/portraits/men/75.jpg" 
              alt="Vikram Mehta" 
              style={styles.teamMemberImage}
            />
            <h3 style={styles.teamMemberName}>Vikram Mehta</h3>
            <p style={styles.teamMemberRole}>Technology Lead</p>
          </div>
        </div>
      </div>

      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Begin Your Wellness Journey Today</h2>
        <p>Join thousands who have transformed their health with AyurDiet's personalized approach</p>
        <a href="#" style={styles.ctaButton}>Get Started Now</a>
      </div>
    </div>
  );
};

export default AboutPage;